from app import app
from models import db, Product, Customer, CheckoutCart, PurchaseHistory
from faker import Faker
import random

faker = Faker()


with app.app_context():

    Customer.query.delete()
    CheckoutCart.query.delete()
    Product.query.delete()

##### CUSTOMERS#####
    franco = Customer(firstname='Franco', lastname="Lepe", email="clearviewworldseo@gmail.com",
                      phone=4444444444, address='123 main street', password="password")
    for i in range(2):
        customer = Customer(
            firstname=faker.first_name(),
            lastname=faker.last_name(),
            email=faker.email(),
            phone=random.randint(1000000000, 9999999999),
            address='1234 happy street',
            password='password'
        )

        db.session.add(franco)
        db.session.add(customer)
        db.session.commit()


###### products####
    product1 = Product(name='Les Paul', brand='Gibson', price=2799.99, description='Les Paul Standard 60s neck, Gold Top.',
                       image='https://images.squarespace-cdn.com/content/v1/54132a28e4b030d3be2f32eb/1670269168382-VWBIIB1GCMF92UGM9IT5/836218D1-F30D-49DD-8919-AEAF0E2A744B.jpeg?format=1000w')
    product2 = Product(name='SG', brand='Gibson', price=1599.99, description='SG Standard, Heritage Cherry',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjPJxRn4c7bI2gEi4rnsADzOT6LXDReHNwwEepG2EsPX1TUpQmsHG6kvYKttvB_8NhlM&usqp=CAU')
    product3 = Product(name='Custom 24', brand='PRS', price=4050.00, description='Custom 24 with Pattern Thin Neck, Eriza Verde',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeRpd8JXEa4XKvEmZf2uC8xWiAUcHu767Pg&usqp=CAU')
    product4 = Product(name='OR100', brand='Orange', price=2349.00, description='Orange OR100H - 100-Watt Tube Head',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehFCkBOelsymdq_6XB_gGz1WsKcyMNg0gsQ&usqp=CAU')
    product5 = Product(name='JCM 900', brand='Marshall', price=2999.99, description='100 Watt, Guitar Tube amp head',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjxnTn6FSQQahp-cEtWr8ldNYHrmprLZJmQoTsrkGwpI2y9NDm2No8hf2FX9zl7-yrYE&usqp=CAU')
    product6 = Product(name='Centennial Zep 4-Piece', brand='Ludwig', price=1999.99, description='4-Piece Acustic Drum Set',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmXr3c2khzJBc6f1lUTWlzkS-LpckpEpsog&usqp=CAU')
    product7 = Product(name='Telecaster', brand='Fender', price=1799.99, description='Telecaster Maple Fingerboard, Butterscotch Blonde',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1ZFra5h5p43I-7Iyy3dRYIdk_cBh8o_usw&usqp=CAU')
    product8 = Product(name='SM57', brand='Sure', price=99.99, description='Cardioid Dynamic Instrument Microphone',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnibIwHxO0IEVoW_DYMKjCWTRV8ttsS5BLzg&usqp=CAU')
    product9 = Product(name='U57', brand='Neumann', price=3295.00, description='neumann u 87 ai large-diaphragm condenser microphone,nickel',
                       image='https://m.kitmonsters.com/05127-0470-u87ai.large.jpg')
    product10 = Product(name='American Professional II Precision Bass', brand='Fender', price=1749.00, description='3-color Sunburst with Rosewood Fingerboard',
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Yl6dK-EQi4prcmAfXhoU6acnb3joU5UWSg&usqp=CAU')
    product11 = Product(name='210e Deluxe Dreadnought', brand='Taylor', price=1499.00, description='Deluxe Dreadnought Acoustic-Electric Guitar Tobacco Sunburst',
                        image='https://cdn.shopify.com/s/files/1/0265/6190/4699/products/2106049554-1_1200x.jpg?v=1595221023')
    product12 = Product(name='Instrument Cable', brand="Musician's Gear", price=16.99, description='Instrument Cable Black Braid 20 ft. Black',
                        image='https://spectraflex.com/cdn/shop/products/shopify_BCxQ-Q_1024x1024.jpg?v=1361721145')
    product13 = Product(name='Player Plus Jazz Bass V', brand='Fender', price=1249.99, description='Maple Fingerboard Opal Spark',
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyUklDZYoFtFjGubN5qNtOCqlWW6DNqIHOg&usqp=CAU')
    product14 = Product(name='Cymbal Pack', brand='MEINL HCS ', price=1499.00, description='Cymbal Pack With Free Splash and Sticks',
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8C_bjMX8stc3RBlUd8LAU-Sqeur-Jk000g&usqp=CAU')
    product15 = Product(name='DJ DDJ-FLX10 4-Channel', brand='Pioneer', price=1599.00, description='Performance DJ Controller for Rekordbox DJ and Serato DJ Pro Black',
                        image='https://media.guitarcenter.com/is/image/MMGS7/M00278000000001-00-600x600.jpg')
    product16 = Product(name='Digital Piano Black 88 Key', brand='Williams Allegro', price=299.99, description='88 weighted-key digital piano with superior sounds and breakthrough features',
                        image='https://media.guitarcenter.com/is/image/MMGS7/L34771000001001-00-600x600.jpg')
    product17 = Product(name='Scarlett 4i4', brand='Focusrite', price=259.99, description='Scarlett 4i4 is the perfect interface for musicians and producers',
                        image='https://media.guitarcenter.com/is/image/MMGS7/L56576000000000-00-600x600.jpg')
    product18 = Product(name='Jimmie Morales Signature Series Congas', brand='Toca', price=514.49, description='11 in. Purple Sparkle',
                        image='https://media.guitarcenter.com/is/image/MMGS7/L56867000001001-00-600x600.jpg')
    product19 = Product(name='Regular Slinky GuitarStrings', brand='Ernie Ball', price=6.99, description='2221 (10-46) Nickel Wound Electric Guitar Strings',
                        image='https://media.guitarcenter.com/is/image/MMGS7/100622000000000-00-600x600.jpg')
    product20 = Product(name='TOD10N Tim Henson Signature', brand='Ibanez', price=699.99, description='Nylon Acoustic-Electric Guitar Black Flat',
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf0Fk-gwJQyKgm_OORy2w4hBB6KQDiD8iag&usqp=CAU')
    product21 = Product(name='Bronze Acoustic Guitar Strings', brand='Elixir', price=17.99, description= 'Bronze Acoustic Guitar Strings With NANOWEB Coating',
                        image='https://media.guitarcenter.com/is/image/MMGS7/101571000000000-00-600x600.jpg')
    product22 = Product(name='Red Rose Jacquard Strap', brand='Ernie Ball', price=19.99, description= 'Nylon Guitar Strap',
                        image='https://media.guitarcenter.com/is/image/MMGS7/L76749000000000-00-600x600.jpg')
    product23 = Product(name='8050B 8"', brand='Genelec', price=19.99, description= ' 8" Powered Studio Monitor ',
                        image='https://media.guitarcenter.com/is/image/MMGS7/H98193000000000-00-600x600.jpg')
    product24 = Product(name='Slash Cry Bab Wah SW95', brand='Dunlop', price=199.99, description= 'high-gain circuit for a different and distinct sound.  ',
                        image='https://media.guitarcenter.com/is/image/MMGS7/151023000000000-00-600x600.jpg')

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    db.session.add(product21)
    db.session.add(product22)
    db.session.add(product23)
    db.session.add(product24)
    db.session.commit()

# checkoutcart

    # checkout_cart = CheckoutCart(product_id=1, customer_id=2)
    # db.session.add(checkout_cart)
    # db.session.commit()


# purchase history

    # purchase_history = PurchaseHistory(product_id=1, customer_id=7)
    # db.session.add(purchase_history)
    # db.session.commit()
