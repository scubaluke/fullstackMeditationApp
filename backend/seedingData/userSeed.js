import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        phone: 8082987120,
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@example.com',
        phone: 9098443657,
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        phone: 8082987120,
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users