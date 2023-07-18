const products = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        RoleType: ['Admin']
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        RoleType: ['Admin']
    },
    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        RoleType: ['Admin', 'NormalCustomer']
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        RoleType: ['Admin']
    },
    {
        id: '1014',
        code: 'waas1x2as',
        name: 'Headphones',
        description: 'Product Description',
        price: 175,
        category: 'Electronics',
        quantity: 8,
        inventoryStatus: 'LOWSTOCK',
        rating: 5,
        RoleType: ['Admin', 'NormalCustomer']
    },
    {
        id: '1012',
        code: '250vm23cc',
        name: 'Green T-Shirt',
        description: 'Product Description',
        price: 49,
        category: 'Clothing',
        quantity: 74,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        RoleType: ['Admin']
    },
    {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'Product Description',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        RoleType: ['Admin']
    },
    {
        id: '1008',
        code: 'vbb124btr',
        name: 'Game Controller',
        description: 'Product Description',
        price: 99,
        category: 'Electronics',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 4,
        RoleType: ['Admin', 'NormalCustomer']
    },
    {
        id: '1009',
        code: 'cm230f032',
        name: 'Gaming Set',
        description: 'Product Description',
        price: 299,
        category: 'Electronics',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 3,
        RoleType: ['Admin']
    },
]

const productListByUser = (products) =>{
    /*
    function take root object of the
    category tree as a parameter and returns an array containing a
    list of objects, one object per customer
    */
	const users = [
    
    {
        "first_name": 'James',
        "last_name": 'Fox',
        "email": "JamesFox@mail.com",
        "RoleType": 'NormalCustomer',
        "userID" : 20,
    },
    {
        "first_name": 'John',
        "last_name": 'Doe',
        "email": "JohnDoe@mail.com",
        "RoleType": 'Admin',
        "userID" : 10,
    },
    
    ]

    const array = []

    products.map((item) => {
        //   combine user and products based on the user role

        users.map( user => {
            if (item.RoleType[0] === user.RoleType || item.RoleType[1] === user.RoleType){
                array.push({'products':item, user});
            }
        })
    });

  
    const groups = array.reduce((groups, item) => {
        // Group items objects by the user the belong too.

        const group = (groups[`${item.user.first_name} ${item.user.last_name}`] || []);
        group.push({...item.products});

        group.forEach(element => {
        delete element['RoleType'];
        });
    
        groups[`${item.user.first_name} ${item.user.last_name}`] = group;


        return groups;
    }, {});

    return groups

}

console.log(productListByUser(products))
