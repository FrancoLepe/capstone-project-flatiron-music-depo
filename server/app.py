

from flask import Flask, request, make_response, jsonify, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from models import db, Product, Customer, CheckoutCart
#, PurchaseHistory


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
db.init_app(app)


with app.app_context():
    db.create_all()
migrate = Migrate(app, db)
CORS(app)
api = Api(app)



@app.route('/')
def index():
    return '<h1>Music DEPO API is running!</h1>'






class Products(Resource):
    def get(self):
        product_list = [product.to_dict() for product in Product.query.all()]
        return product_list

api.add_resource(Products,'/products')





class ProductById(Resource):
    def get(self, id):
        product = Product.query.filter_by(id=id).first()
        product_dict = product.to_dict(rules=('customers', 'customers.checkout_carts.id',))
        response = make_response(
            product_dict,
            200,
            {"Content-Type": "application/json"}
        )
        return response

api.add_resource(ProductById, '/products/<int:id>')




class Customers(Resource):
    def get(self):
        customer_list = [customer.to_dict() for customer in Customer.query.all()]
        response = make_response(
            customer_list,
            200,
            {"Content-Type": "application/json"}
        )
        return response

    def post(self):
        data = request.get_json()
        try:
            customer = Customer(
                firstname=data["firstname"],
                lastname=data["lastname"],
                email=data["email"],
                phone=data["phone"],
                address="1234 happy street",
                password="password",
            )
            db.session.add(customer)
            db.session.commit()
        except Exception as errors:
            return make_response({
                "errors": [errors.__str__()]
            }, 422)
        return make_response(customer.to_dict(), 201)

api.add_resource(Customers,'/customers')





class CustomerById(Resource):
    def get(self, id):
        customer = Customer.query.filter_by(id=id).first()
        customer_dict = customer.to_dict(rules=('products', 'products.checkout_carts.id',))
        response = make_response(
            customer_dict,
            200,
            {"Content-Type": "application/json"}
        )
        return response

    def delete(self, id):
        customer = Customer.query.filter_by(id=id).first()
        if not customer:
            return make_response({'error': 'user not found'}, 404)
        db.session.delete(customer)
        db.session.commit()
        response = make_response('', 200)
        return response
    
    
    def patch(self,id):
        data = request.get_json()
        customer = Customer.query.filter_by(id=id).first()
        if not customer:
            return make_response({'error': 'customer not found'}, 404)
        try:
            for attr in data:
                setattr(customer, attr, data[attr])
            db.session.add(customer)
            db.session.commit()
        except Exception as ex:
            return make_response({'error': [ex.__str__()]}, 422)
        return make_response(customer.to_dict(),202)

    
api.add_resource(CustomerById, '/customers/<int:id>')






class CreateCart(Resource):
    def post(self):
        data = request.get_json()
        try:
            new_cart = CheckoutCart(
                customer_id=data['customer_id'],
                product_id=data['product_id']
            )
            db.session.add(new_cart)
            db.session.commit()
        except Exception as errors:
            return make_response({
                "errors": [errors.__str__()]
            }, 422)        
        new_cart_dict = {
            "customer_id": new_cart.customer_id,
            "product_id": new_cart.product_id,
            "id": new_cart.id
        }
        
        return make_response(new_cart_dict, 201)
api.add_resource(CreateCart, '/create_cart')




class Login(Resource):
    def post(self):
        data = request.get_json()
        email = data['email']
        password = data['password']
        customer = Customer.query.filter_by(email=email).first()
        if customer:
            if (customer.password == password):
                session['customer_id'] = customer.id
                
                return make_response(customer.to_dict(), 200)
        return make_response({'error': '401 Unauthorized'}, 401)
api.add_resource(Login, '/login')





class Logout(Resource):
    def delete(self):
        session['user_id'] = None

        
        return {'message': '204: No Content'}, 204
api.add_resource(Logout, '/logout')





class CheckSession(Resource):
    def get(self):
        customer = Customer.query.filter(Customer.id == session.get('customer_id')).first()
        if user:
            return customer.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401


api.add_resource(CheckSession, '/check_session')





if __name__ == "__main__":
    app.run(port=5555, debug=True)


