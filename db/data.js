const allData = [
    {
        details: {
            material: 'Velvet',
            dimensions: '88"W x 35"H x 40"D',
            weight: '150 lbs'
        },
        id: '664d41d3538b522e53979ef8',
        name: 'Luxurious Velvet Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1683121158319-acc40c6ef3b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 1199.99,
        discount_price: 1099.99,
        reviewsNumber: 28,
        ratings: 4.6,
        availability: true,
        brand: 'Opulent Interiors',
        category: 'sofa',
        description: 'A luxurious velvet sofa that epitomizes opulence and comfort.',
        sizes: ['3-seater', 'Chaise Lounge', 'Modular'],
        colors: ['#800080', '#4B0082', '#483D8B'],
        sku: 18,
        soldCounts: 8
    },
    {
        details: {
            material: 'Fabric',
            dimensions: '80"W x 36"H x 40"D',
            weight: '120 lbs'
        },
        id: '664d41d3538b522e53979eeb',
        name: 'Classic Fabric Sofa',
        image: [
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 499,
        discount_price: 699.99,
        reviewsNumber: 25,
        ratings: 4.5,
        availability: false,
        brand: 'Comfort Furniture',
        category: 'sofa',
        description: 'A comfortable and stylish sofa perfect for your living room.',
        sizes: ['2-seater', '3-seater', 'L-shaped'],
        colors: ['#808080', '#F5F5DC', '#000080'],
        sku: 50,
        soldCounts: 20
    },
    {
        details: {
            material: 'Polyester',
            dimensions: '84"W x 33"H x 37"D',
            weight: '120 lbs'
        },
        id: '664d41d3538b522e53979eef',
        name: 'Retro Style Sofa',
        image: [
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1491926626787-62db157af940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 849.99,
        discount_price: 749.99,
        reviewsNumber: 18,
        ratings: 4.4,
        availability: true,
        brand: 'Vintage Vibes',
        category: 'sofa',
        description: 'A retro style sofa that adds a nostalgic touch to your living room.',
        sizes: ['3-seater', 'Armchair', 'Loveseat'],
        colors: ['#FFD700', '#808000', '#A0522D'],
        sku: 55,
        soldCounts: 30
    },
    {
        details: {
            material: 'Wicker',
            table: '48"W x 30"H',
            chair: '24"W x 36"H x 24"D',
            weight: 'Table: 40 lbs; Chairs: 20 lbs each'
        },
        sizes: [],
        id: '664d41d3538b522e53979efd',
        name: 'Garden Patio Set',
        image: [
            'https://images.unsplash.com/photo-1581613856477-f65208436a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0JTIwZG9vciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560410285-077766a648fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0JTIwZG9vciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1492724282899-01d3e50e6862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1581613856501-8a5d57fafbdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1600873040273-48e6da19ed94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 15,
        ratings: 4.2,
        availability: true,
        brand: 'Outdoor Living',
        category: 'outdoor',
        description: 'A stylish and durable patio set perfect for outdoor gatherings.',
        colors: ['#A52A2A', '#228B22', '#4169E1'],
        sku: 20,
        soldCounts: 10
    },
    {
        details: {
            material: 'Rattan',
            sofa: '86"W x 36"H x 40"D',
            chair: '24"W x 36"H x 24"D',
            table: '48"W x 18"H x 24"D',
            weight: 'Sofa: 60 lbs; Chairs: 30 lbs each; Table: 25 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979eff',
        name: 'Rattan Garden Sofa Set',
        image: [
            'https://images.unsplash.com/photo-1560410285-077766a648fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0JTIwZG9vciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1492724282899-01d3e50e6862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1581613856501-8a5d57fafbdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1600873040273-48e6da19ed94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1428190318100-06790c8b2e5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 1499.99,
        discount_price: 1399.99,
        reviewsNumber: 25,
        ratings: 4.6,
        availability: true,
        brand: 'Rattan Retreat',
        category: 'outdoor',
        description: 'A luxurious rattan sofa set for your garden or patio oasis.',
        colors: ['#8B4513', '#2E8B57', '#8A2BE2'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            material: 'Cotton',
            hammock: '80"L x 60"W',
            stand: '96"L x 45"W x 48"H',
            weight: 'Hammock: 10 lbs; Stand: 40 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f00',
        name: 'Outdoor Hammock with Stand',
        image: [
            'https://images.unsplash.com/photo-1492724282899-01d3e50e6862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1581613856501-8a5d57fafbdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1600873040273-48e6da19ed94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1428190318100-06790c8b2e5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1489421931051-521ec235bbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 199.99,
        discount_price: 179.99,
        reviewsNumber: 10,
        ratings: 4,
        availability: true,
        brand: 'Relaxation Haven',
        category: 'outdoor',
        description: 'An outdoor hammock set with a sturdy stand for ultimate relaxation.',
        colors: ['#228B22', '#4169E1', '#800080'],
        sku: 25,
        soldCounts: 15
    },
    {
        details: {
            material: 'Metal',
            dimensions: '72"W x 30"H x 36"D',
            weight: '60 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f06',
        name: 'Outdoor Dining Table',
        image: [
            'https://images.unsplash.com/photo-1581613856501-8a5d57fafbdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1600873040273-48e6da19ed94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1428190318100-06790c8b2e5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1489421931051-521ec235bbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1544518630-8649eadc9acc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 599.99,
        discount_price: 549.99,
        reviewsNumber: 10,
        ratings: 4.1,
        availability: true,
        brand: 'Alfresco Designs',
        category: 'outdoor',
        description: 'A spacious outdoor dining table for hosting gatherings.',
        colors: ['#808080', '#008080', '#800080'],
        sku: 18,
        soldCounts: 8
    },
    {
        details: {
            material: 'Plastic',
            dimensions: '48"W x 24"H x 24"D',
            weight: '30 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f08',
        name: 'Outdoor Storage Box',
        image: [
            'https://images.unsplash.com/photo-1600873040273-48e6da19ed94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1428190318100-06790c8b2e5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1489421931051-521ec235bbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1544518630-8649eadc9acc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1517086822157-2b0358e7684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 199.99,
        discount_price: 179.99,
        reviewsNumber: 8,
        ratings: 4,
        availability: true,
        brand: 'Storage Solutions',
        category: 'outdoor',
        description: 'A durable outdoor storage box to keep your belongings organized.',
        colors: ['#808080', '#008080', '#800080'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: {
            material: 'Wood',
            dimensions: '60"W x 30"H x 18"D',
            weight: '150 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f0d',
        name: 'Dresser with Mirror',
        image: [
            'https://plus.unsplash.com/premium_photo-1679121559500-b03bf1343439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Elegant Living',
        category: 'bedroom',
        description: 'A spacious dresser with a mirror for organizing clothes and accessories.',
        colors: ['#8B4513', '#2E8B57', '#8A2BE2'],
        sku: 10,
        soldCounts: 5
    },
    {
        details: { material: 'Metal', dimensions: '18"H', weight: '5 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f10',
        name: 'Bedside Lamp',
        image: [
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 49.99,
        discount_price: 39.99,
        reviewsNumber: 10,
        ratings: 4.2,
        availability: true,
        brand: 'Light & Bright',
        category: 'bedroom',
        description: 'A stylish bedside lamp to add ambiance to your bedroom.',
        colors: ['#FFD700', '#800080', '#008080'],
        sku: 30,
        soldCounts: 20
    },
    {
        details: { material: 'Glass', dimensions: '36"W x 48"H', weight: '20 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f18',
        name: 'Bedroom Mirror',
        image: [
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 6,
        ratings: 4,
        availability: true,
        brand: 'Reflections',
        category: 'bedroom',
        description: 'A large mirror to brighten up your bedroom and add depth to the space.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 12
    },
    {
        details: { material: 'Plastic', features: '1.7L Capacity', weight: '3 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f24',
        name: 'Electric Kettle',
        image: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673015211356-c398ac1f0cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 39.99,
        discount_price: 29.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'QuickHeat',
        category: 'kitchen',
        description: 'An efficient electric kettle for quickly boiling water for tea or coffee.',
        colors: ['#FFFFFF'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: { color: 'Grey', material: 'Wool', dimensions: "8' x 10'" },
        sizes: [],
        id: '664d41d3538b522e53979f2a',
        name: 'Rug',
        image: [
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 129.99,
        discount_price: 109.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'RugMart',
        category: 'living room',
        description: 'A soft and stylish rug to tie together your living room decor.',
        colors: ['#808080'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            material: 'Leather',
            dimensions: '90"W x 36"H x 38"D',
            weight: '140 lbs'
        },
        id: '664d41d3538b522e53979ef7',
        name: 'Modern Sectional Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1491926626787-62db157af940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 999.99,
        discount_price: 899.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'Contemporary Designs',
        category: 'sofa',
        description: 'A modern sectional sofa that adds versatility to your living space.',
        sizes: ['Sectional', 'L-shaped', 'Chaise Lounge'],
        colors: ['#FFFFFF', '#D3D3D3', '#000000'],
        sku: 30,
        soldCounts: 12
    },
    {
        details: {
            material: 'Leather',
            dimensions: '90"W x 36"H x 38"D',
            weight: '140 lbs'
        },
        id: '664d41d3538b522e53979efa',
        name: 'Stylish Leather Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1491926626787-62db157af940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 1299.99,
        discount_price: 1199.99,
        reviewsNumber: 22,
        ratings: 4.5,
        availability: true,
        brand: 'Trendy Designs',
        category: 'sofa',
        description: 'A stylish leather sofa that adds sophistication to any room.',
        sizes: ['3-seater', 'Sectional', 'Recliner'],
        colors: ['#8B4513', '#000000', '#A0522D'],
        sku: 20,
        soldCounts: 8
    },
    {
        details: {
            material: 'Fabric',
            dimensions: '86"W x 36"H x 40"D',
            weight: '140 lbs'
        },
        id: '664d41d3538b522e53979efc',
        name: 'French Country Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1491926626787-62db157af940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 999.99,
        discount_price: 899.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Country Home',
        category: 'sofa',
        description: 'A French country sofa that adds charm and elegance to your home.',
        sizes: ['3-seater', 'Sectional', 'Daybed'],
        colors: ['#D3D3D3', '#F0F8FF', '#8B4513'],
        sku: 33,
        soldCounts: 14
    },
    {
        details: {
            material: 'Steel',
            firePit: '36" Diameter x 24" Height',
            weight: '75 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f01',
        name: 'Outdoor Fire Pit',
        image: [
            'https://images.unsplash.com/photo-1428190318100-06790c8b2e5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1489421931051-521ec235bbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1544518630-8649eadc9acc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1517086822157-2b0358e7684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1513029999387-75ef01da4264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 399.99,
        discount_price: 349.99,
        reviewsNumber: 12,
        ratings: 4.3,
        availability: true,
        brand: 'Fire & Heat',
        category: 'outdoor',
        description: 'An outdoor fire pit for cozy evenings with friends and family.',
        colors: ['#A52A2A', '#D2691E', '#696969'],
        sku: 20,
        soldCounts: 10
    },
    {
        details: {
            material: 'Polyester',
            dimensions: "9' Diameter",
            weight: '10 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f04',
        name: 'Outdoor Umbrella',
        image: [
            'https://images.unsplash.com/photo-1489421931051-521ec235bbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1544518630-8649eadc9acc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1517086822157-2b0358e7684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1513029999387-75ef01da4264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1552819401-700b5e342b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 6,
        ratings: 4,
        availability: true,
        brand: 'Sunshade Solutions',
        category: 'outdoor',
        description: 'A large outdoor umbrella to provide shade on sunny days.',
        colors: ['#FFD700', '#008080', '#A52A2A'],
        sku: 20,
        soldCounts: 8
    },
    {
        details: {
            material: 'Fabric',
            dimensions: '30"W x 36"H x 24"D',
            weight: '15 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f14',
        name: 'Bedroom Chair',
        image: [
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 99.99,
        discount_price: 79.99,
        reviewsNumber: 5,
        ratings: 3.8,
        availability: true,
        brand: 'Comfort Corner',
        category: 'bedroom',
        description: 'A cozy and comfortable chair for reading or relaxation in your bedroom.',
        colors: ['#8A2BE2', '#2E8B57', '#8B4513'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            material: 'Wood',
            dimensions: '36"W x 18"H x 18"D',
            weight: '25 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f1a',
        name: 'Bedroom Storage Bench',
        image: [
            'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 99.99,
        discount_price: 79.99,
        reviewsNumber: 6,
        ratings: 4,
        availability: true,
        brand: 'Storage Solutions',
        category: 'bedroom',
        description: 'A versatile storage bench to keep your bedroom tidy and organized.',
        colors: ['#8A2BE2', '#2E8B57', '#8B4513'],
        sku: 15,
        soldCounts: 8
    },
    {
        details: {
            material: 'Stainless Steel',
            features: 'Convection Heating',
            weight: '12 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f20',
        name: 'Toaster Oven',
        image: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673015211356-c398ac1f0cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1550223026-0d6fd780c560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 89.99,
        discount_price: 79.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'ToastMaster',
        category: 'kitchen',
        description: 'A versatile toaster oven for toasting, baking, and broiling.',
        colors: ['#FFFFFF'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: { material: 'Stainless Steel', pieces: 12, weight: '8 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f22',
        name: 'Kitchen Knife Set',
        image: [
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673015211356-c398ac1f0cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1550223026-0d6fd780c560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 99.99,
        discount_price: 89.99,
        reviewsNumber: 30,
        ratings: 4.8,
        availability: true,
        brand: 'Cutlery Craft',
        category: 'kitchen',
        description: 'A comprehensive knife set for all your kitchen cutting needs.',
        colors: ['#A9A9A9'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            color: 'Black',
            material: 'Wood',
            dimensions: '60"W x 16"D x 24"H',
            maxTVSize: '60 inches'
        },
        sizes: [],
        id: '664d41d3538b522e53979f28',
        name: 'TV Stand',
        image: [
            'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 199.99,
        discount_price: 179.99,
        reviewsNumber: 30,
        ratings: 4.6,
        availability: true,
        brand: 'Media Master',
        category: 'living room',
        description: 'A sleek and sturdy TV stand to organize your entertainment center in style.',
        colors: ['#000000'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            material: 'Leather',
            dimensions: '86"W x 36"H x 38"D',
            weight: '130 lbs'
        },
        id: '664d41d3538b522e53979ef4',
        name: 'Industrial Chic Sofa',
        image: [
            'https://images.unsplash.com/photo-1491926626787-62db157af940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 799.99,
        discount_price: 699.99,
        reviewsNumber: 18,
        ratings: 4.4,
        availability: true,
        brand: 'Urban Loft',
        category: 'sofa',
        description: 'An industrial chic sofa with a blend of leather and metal accents.',
        sizes: ['2-seater', '3-seater', 'L-shaped'],
        colors: ['#8B4513', '#A0522D', '#000000'],
        sku: 28,
        soldCounts: 10
    },
    {
        details: {
            material: 'Plastic',
            dimensions: '20"W x 32"H x 18"D',
            weight: '15 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f0a',
        name: 'Outdoor Folding Chair',
        image: [
            'https://images.unsplash.com/photo-1544518630-8649eadc9acc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1517086822157-2b0358e7684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1513029999387-75ef01da4264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1552819401-700b5e342b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1578772732210-2e4678f141fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 49.99,
        discount_price: 39.99,
        reviewsNumber: 5,
        ratings: 3.8,
        availability: true,
        brand: 'Easy Fold',
        category: 'outdoor',
        description: 'A lightweight and portable folding chair for outdoor events.',
        colors: ['#808080', '#008000', '#800080'],
        sku: 30,
        soldCounts: 20
    },
    {
        details: {
            material: 'Plastic',
            dimensions: '12" Diameter',
            weight: '2 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f15',
        name: 'Bedroom Wall Clock',
        image: [
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 39.99,
        discount_price: 29.99,
        reviewsNumber: 4,
        ratings: 3.5,
        availability: true,
        brand: 'Timeless Decor',
        category: 'bedroom',
        description: 'A stylish wall clock to keep track of time in your bedroom.',
        colors: ['#FFD700', '#800080', '#008080'],
        sku: 15,
        soldCounts: 8
    },
    {
        details: { material: 'Plastic', features: '500W Motor', weight: '10 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f21',
        name: 'Food Processor',
        image: [
            'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673015211356-c398ac1f0cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1550223026-0d6fd780c560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 129.99,
        discount_price: 109.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'PrepMaster',
        category: 'kitchen',
        description: 'A powerful food processor for chopping, slicing, and shredding.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            color: 'Grey',
            material: 'Fabric',
            dimensions: '86"W x 36"H x 40"D',
            seatingCapacity: 5
        },
        sizes: [],
        id: '664d41d3538b522e53979f25',
        name: 'Modern Sectional Sofa',
        image: [
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 50,
        ratings: 4.9,
        availability: true,
        brand: 'Modern Living',
        category: 'living room',
        description: 'A stylish and comfortable modern sectional sofa for your living room.',
        colors: ['#808080'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: {
            color: 'Espresso',
            material: 'Wood',
            dimensions: '48"W x 24"D x 18"H',
            storageCapacity: '2 compartments'
        },
        sizes: [],
        id: '664d41d3538b522e53979f26',
        name: 'Coffee Table with Storage',
        image: [
            'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 149.99,
        discount_price: 129.99,
        reviewsNumber: 40,
        ratings: 4.8,
        availability: true,
        brand: 'Home Essentials',
        category: 'living room',
        description: 'A functional coffee table with ample storage space for your living room.',
        colors: ['#654321'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            material: 'Polyester Blend',
            dimensions: '95"W x 36"H x 40"D',
            weight: '140 lbs'
        },
        id: '664d41d3538b522e53979ef0',
        name: 'Luxe Modular Sofa',
        image: [
            'https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1673014201688-8b74e5a60777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 1299.99,
        discount_price: 1199.99,
        reviewsNumber: 22,
        ratings: 4.7,
        availability: true,
        brand: 'Chic Living',
        category: 'sofa',
        description: 'A luxurious modular sofa that offers versatility and comfort.',
        sizes: ['Modular', 'Sectional', 'Corner Sofa'],
        colors: ['#696969', '#2F4F4F', '#DCDCDC'],
        sku: 20,
        soldCounts: 5
    },
    {
        details: {
            material: 'Leather',
            dimensions: '88"W x 34"H x 39"D',
            weight: '130 lbs'
        },
        id: '664d41d3538b522e53979eec',
        name: 'Elegant Leather Sofa',
        image: [
            'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1673014201688-8b74e5a60777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 1099.99,
        discount_price: 999.99,
        reviewsNumber: 30,
        ratings: 4.8,
        availability: true,
        brand: 'Luxury Living',
        category: 'sofa',
        description: 'An elegant leather sofa that exudes sophistication.',
        sizes: ['3-seater', 'Sectional', 'Recliner'],
        colors: ['#8B4513', '#000000', '#FFF8DC'],
        sku: 40,
        soldCounts: 15
    },
    {
        details: {
            material: 'Fabric',
            dimensions: '86"W x 35"H x 38"D',
            weight: '130 lbs'
        },
        id: '664d41d3538b522e53979ef1',
        name: 'Scandinavian Style Sofa',
        image: [
            'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1673014201688-8b74e5a60777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8fDA%3D'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 28,
        ratings: 4.6,
        availability: true,
        brand: 'Nordic Home',
        category: 'sofa',
        description: 'A Scandinavian style sofa that combines simplicity and functionality.',
        sizes: ['2-seater', '3-seater', 'Daybed'],
        colors: ['#D3D3D3', '#B0C4DE', '#F0F8FF'],
        sku: 25,
        soldCounts: 12
    },
    {
        details: {
            material: 'Linen',
            dimensions: '80"W x 33"H x 37"D',
            weight: '130 lbs'
        },
        id: '664d41d3538b522e53979ef6',
        name: 'Chic Linen Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1673014201688-8b74e5a60777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        price: 749.99,
        discount_price: 699.99,
        reviewsNumber: 22,
        ratings: 4.5,
        availability: true,
        brand: 'Modern Comfort',
        category: 'sofa',
        description: 'A chic linen sofa that combines style and comfort effortlessly.',
        sizes: ['2-seater', '3-seater', 'Modular'],
        colors: ['#F5F5DC', '#D3D3D3', '#FFFFFF'],
        sku: 38,
        soldCounts: 16
    },
    {
        details: {
            material: 'Fabric',
            dimensions: '86"W x 34"H x 38"D',
            weight: '130 lbs'
        },
        id: '664d41d3538b522e53979ef9',
        name: 'Cozy Fabric Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1673014201688-8b74e5a60777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxgTYXPW8uUbkxIryL8iYxHRiHHvtpXEu8pQ_wmlKkw4_Zp1kvO9YC_iIzPhq'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 20,
        ratings: 4.4,
        availability: true,
        brand: 'Warm Living',
        category: 'sofa',
        description: 'A cozy fabric sofa that invites you to relax and unwind.',
        sizes: ['2-seater', '3-seater', 'Sleeper Sofa'],
        colors: ['#F5F5F5', '#D3D3D3', '#FFFFFF'],
        sku: 25,
        soldCounts: 10
    },
    {
        details: {
            material: 'Polyester Blend',
            dimensions: '84"W x 35"H x 38"D',
            weight: '130 lbs'
        },
        id: '664d41d3538b522e53979efb',
        name: 'Transitional Sofa',
        image: [
            'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxgTYXPW8uUbkxIryL8iYxHRiHHvtpXEu8pQ_wmlKkw4_Zp1kvO9YC_iIzPhq',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPTS9pdC4AMlPigx3O_2ILjHzhsoCocEhgMXZVqMGcqvm2BXP-SYQgt47N8V77'
        ],
        price: 949.99,
        discount_price: 849.99,
        reviewsNumber: 18,
        ratings: 4.3,
        availability: true,
        brand: 'Timeless Furnishings',
        category: 'sofa',
        description: 'A transitional sofa that seamlessly blends modern and traditional elements.',
        sizes: ['2-seater', '3-seater', 'Sectional'],
        colors: ['#FFFFFF', '#D3D3D3', '#000000'],
        sku: 30,
        soldCounts: 12
    },
    {
        details: {
            material: 'Wood',
            dimensions: '26"W x 42"H x 32"D',
            weight: '35 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f05',
        name: 'Outdoor Rocking Chair',
        image: [
            'https://images.unsplash.com/photo-1517086822157-2b0358e7684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1513029999387-75ef01da4264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1552819401-700b5e342b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1578772732210-2e4678f141fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-aab91ec77568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 199.99,
        discount_price: 179.99,
        reviewsNumber: 12,
        ratings: 4.3,
        availability: true,
        brand: 'Relaxation Rockers',
        category: 'outdoor',
        description: 'A comfortable rocking chair for relaxing outdoors.',
        colors: ['#8B4513', '#228B22', '#D2691E'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: { material: 'Plastic', features: '600W Motor', weight: '8 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f1e',
        name: 'Blender',
        image: [
            'https://plus.unsplash.com/premium_photo-1673015211356-c398ac1f0cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1550223026-0d6fd780c560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'BlendMaster',
        category: 'kitchen',
        description: 'A powerful blender for making smoothies, soups, and sauces.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            material: 'Plastic',
            features: '12-Cup Capacity',
            weight: '6 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f1f',
        name: 'Coffee Maker',
        image: [
            'https://images.unsplash.com/photo-1550223026-0d6fd780c560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1596205250168-c3583813eea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 49.99,
        discount_price: 39.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Cafe Express',
        category: 'kitchen',
        description: 'A convenient coffee maker for brewing your favorite morning pick-me-up.',
        colors: ['#FFFFFF'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            material: 'Polyester Blend',
            dimensions: '82"W x 33"H x 36"D',
            weight: '120 lbs'
        },
        id: '664d41d3538b522e53979ef2',
        name: 'Mid-Century Modern Sofa',
        image: [
            'https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvZmF8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxgTYXPW8uUbkxIryL8iYxHRiHHvtpXEu8pQ_wmlKkw4_Zp1kvO9YC_iIzPhq',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPTS9pdC4AMlPigx3O_2ILjHzhsoCocEhgMXZVqMGcqvm2BXP-SYQgt47N8V77',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDl9vR8MAF7CxcAFeV9RLJ2f01XNRTvEADNEQMgNuz6Dm5OR-xl9C-48sUWwTB'
        ],
        price: 949.99,
        discount_price: 849.99,
        reviewsNumber: 24,
        ratings: 4.5,
        availability: true,
        brand: 'Retro Revival',
        category: 'sofa',
        description: 'A mid-century modern sofa that brings retro charm to your living space.',
        sizes: ['3-seater', 'Sectional', 'Armchair'],
        colors: ['#FFD700', '#008080', '#808080'],
        sku: 30,
        soldCounts: 18
    },
    {
        details: {
            material: 'Aluminum',
            table: '60"W x 30"H',
            chair: '24"W x 36"H x 24"D',
            weight: 'Table: 50 lbs; Chairs: 25 lbs each'
        },
        sizes: [],
        id: '664d41d3538b522e53979efe',
        name: 'Outdoor Dining Set',
        image: [
            'https://images.unsplash.com/photo-1513029999387-75ef01da4264?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1552819401-700b5e342b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1578772732210-2e4678f141fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-aab91ec77568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1533457268547-b65392cdbba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 1299.99,
        discount_price: 1199.99,
        reviewsNumber: 20,
        ratings: 4.5,
        availability: true,
        brand: 'Alfresco Designs',
        category: 'outdoor',
        description: 'An elegant outdoor dining set that enhances your patio or deck.',
        colors: ['#D2691E', '#006400', '#6495ED'],
        sku: 15,
        soldCounts: 8
    },
    {
        details: {
            material: 'Memory Foam',
            size: 'King',
            dimensions: '80"L x 76"W x 12"H',
            weight: '90 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f0e',
        name: 'King Size Mattress',
        image: [
            'https://plus.unsplash.com/premium_photo-1675615949743-6ec930d87410?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 999.99,
        discount_price: 899.99,
        reviewsNumber: 30,
        ratings: 4.8,
        availability: true,
        brand: 'Luxury Slumber',
        category: 'bedroom',
        description: 'A premium king size mattress for a restful and rejuvenating sleep experience.',
        colors: ['#FFFFFF'],
        sku: 25,
        soldCounts: 15
    },
    {
        details: { material: 'Polyester', dimensions: "5' x 7'", weight: '10 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f11',
        name: 'Bedroom Rug',
        image: [
            'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 129.99,
        discount_price: 99.99,
        reviewsNumber: 8,
        ratings: 4,
        availability: true,
        brand: 'Cozy Comfort',
        category: 'bedroom',
        description: 'A soft and plush rug to add warmth and comfort to your bedroom.',
        colors: ['#A52A2A', '#D2691E', '#000080'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            material: 'Wood',
            dimensions: '36"W x 30"H x 18"D',
            weight: '50 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f12',
        name: 'Bedroom Vanity Set',
        image: [
            'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 299.99,
        discount_price: 249.99,
        reviewsNumber: 12,
        ratings: 4.3,
        availability: true,
        brand: 'Glamorous Vanity',
        category: 'bedroom',
        description: 'A stylish vanity set for grooming and makeup application.',
        colors: ['#8A2BE2', '#2E8B57', '#8B4513'],
        sku: 18,
        soldCounts: 10
    },
    {
        details: {
            material: 'Fabric',
            dimensions: '28"W x 36"H x 24"D',
            weight: '20 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f19',
        name: 'Bedroom Accent Chair',
        image: [
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 129.99,
        discount_price: 109.99,
        reviewsNumber: 8,
        ratings: 3.9,
        availability: true,
        brand: 'Accent Allure',
        category: 'bedroom',
        description: 'An elegant accent chair to add sophistication to your bedroom decor.',
        colors: ['#8A2BE2', '#2E8B57', '#8B4513'],
        sku: 18,
        soldCounts: 10
    },
    {
        details: {
            material: 'Cotton',
            dimensions: '82"W x 34"H x 38"D',
            weight: '120 lbs'
        },
        id: '664d41d3538b522e53979ef5',
        name: 'Bohemian Style Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxgTYXPW8uUbkxIryL8iYxHRiHHvtpXEu8pQ_wmlKkw4_Zp1kvO9YC_iIzPhq',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPTS9pdC4AMlPigx3O_2ILjHzhsoCocEhgMXZVqMGcqvm2BXP-SYQgt47N8V77',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDl9vR8MAF7CxcAFeV9RLJ2f01XNRTvEADNEQMgNuz6Dm5OR-xl9C-48sUWwTB',
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHC6k6ZnjC_rZzPweSMId3YqW1nWRmPe3XtQJuh9oZ4aslI8MOBocl3YWyFq2X'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Eclectic Living',
        category: 'sofa',
        description: 'A bohemian style sofa that adds warmth and character to your space.',
        sizes: ['3-seater', 'Sectional', 'Daybed'],
        colors: ['#008080', '#FFD700', '#800000'],
        sku: 33,
        soldCounts: 14
    },
    {
        details: {
            material: 'Wood',
            dimensions: '32"W x 40"H x 38"D',
            weight: '30 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f02',
        name: 'Adirondack Chair',
        image: [
            'https://images.unsplash.com/photo-1552819401-700b5e342b9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1578772732210-2e4678f141fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-aab91ec77568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1533457268547-b65392cdbba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-e8125a17c37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 149.99,
        discount_price: 129.99,
        reviewsNumber: 8,
        ratings: 4,
        availability: true,
        brand: 'Rustic Outdoors',
        category: 'outdoor',
        description: 'A classic Adirondack chair for lounging in your backyard.',
        colors: ['#8B4513', '#228B22', '#0000FF'],
        sku: 30,
        soldCounts: 15
    },
    {
        details: {
            material: 'Wicker',
            dimensions: '28"W x 36"H x 30"D',
            weight: '40 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f07',
        name: 'Outdoor Lounge Chair',
        image: [
            'https://images.unsplash.com/photo-1578772732210-2e4678f141fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-aab91ec77568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1533457268547-b65392cdbba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-e8125a17c37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1532365199385-0b4f6222fcfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww'
        ],
        price: 299.99,
        discount_price: 249.99,
        reviewsNumber: 15,
        ratings: 4.2,
        availability: true,
        brand: 'Relaxation Retreat',
        category: 'outdoor',
        description: 'A comfortable lounge chair for enjoying your outdoor space.',
        colors: ['#A52A2A', '#228B22', '#D2691E'],
        sku: 20,
        soldCounts: 12
    },
    {
        details: {
            material: 'Wood',
            dimensions: '48"W x 30"H x 24"D',
            weight: '50 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f17',
        name: 'Bedroom Desk',
        image: [
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1532344214108-1b6d425db572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 149.99,
        discount_price: 129.99,
        reviewsNumber: 8,
        ratings: 3.8,
        availability: true,
        brand: 'Study Space',
        category: 'bedroom',
        description: 'A functional desk for studying or working in the comfort of your bedroom.',
        colors: ['#8A2BE2', '#2E8B57', '#8B4513'],
        sku: 25,
        soldCounts: 15
    },
    {
        details: { material: 'Metal', dimensions: '60"H', weight: '10 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f1b',
        name: 'Bedroom Floor Lamp',
        image: [
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1532344214108-1b6d425db572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1600210491305-7396500b5b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 69.99,
        discount_price: 59.99,
        reviewsNumber: 5,
        ratings: 3.8,
        availability: true,
        brand: 'Bright Glow',
        category: 'bedroom',
        description: 'A sleek floor lamp to provide ambient lighting in your bedroom.',
        colors: ['#FFD700', '#800080', '#008080'],
        sku: 20,
        soldCounts: 12
    },
    {
        details: {
            color: 'Silver',
            material: 'Metal',
            dimensions: '60"H',
            bulbType: 'LED'
        },
        sizes: [],
        id: '664d41d3538b522e53979f29',
        name: 'Floor Lamp',
        image: [
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'Light Trends',
        category: 'living room',
        description: 'A contemporary floor lamp to add ambient lighting to your living space.',
        colors: ['#C0C0C0'],
        sku: 30,
        soldCounts: 25
    },
    {
        details: {
            material: 'Velvet',
            dimensions: '82"W x 35"H x 38"D',
            weight: '125 lbs'
        },
        id: '664d41d3538b522e53979eed',
        name: 'Contemporary Velvet Sofa',
        image: [
            'https://plus.unsplash.com/premium_photo-1683121158319-acc40c6ef3b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPTS9pdC4AMlPigx3O_2ILjHzhsoCocEhgMXZVqMGcqvm2BXP-SYQgt47N8V77',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDl9vR8MAF7CxcAFeV9RLJ2f01XNRTvEADNEQMgNuz6Dm5OR-xl9C-48sUWwTB',
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHC6k6ZnjC_rZzPweSMId3YqW1nWRmPe3XtQJuh9oZ4aslI8MOBocl3YWyFq2X',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnZZs_qW4fk1v0v5nmGgokeGin_ZndIxjBwSOSxCntKaggWRPGOGFf2M6sNOLd'
        ],
        price: 899.99,
        discount_price: 799.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Modern Comfort',
        category: 'sofa',
        description: 'A contemporary velvet sofa that adds a pop of color to your space.',
        sizes: ['2-seater', 'Chaise Lounge', 'Modular'],
        colors: ['#008080', '#708090', '#800080'],
        sku: 35,
        soldCounts: 10
    },
    {
        details: {
            material: 'Velvet',
            dimensions: '84"W x 35"H x 39"D',
            weight: '140 lbs'
        },
        id: '664d41d3538b522e53979ef3',
        name: 'Plush Velvet Sofa',
        image: [
            'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDl9vR8MAF7CxcAFeV9RLJ2f01XNRTvEADNEQMgNuz6Dm5OR-xl9C-48sUWwTB',
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHC6k6ZnjC_rZzPweSMId3YqW1nWRmPe3XtQJuh9oZ4aslI8MOBocl3YWyFq2X',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnZZs_qW4fk1v0v5nmGgokeGin_ZndIxjBwSOSxCntKaggWRPGOGFf2M6sNOLd',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9-nx2E0xE9Ob8aktjxytbjWnABn4H39gA8hjUMUCTzvRpBNfURnqFFx74_x4'
        ],
        price: 999.99,
        discount_price: 899.99,
        reviewsNumber: 26,
        ratings: 4.7,
        availability: true,
        brand: 'Opulent Living',
        category: 'sofa',
        description: 'A plush velvet sofa that offers unparalleled comfort and style.',
        sizes: ['3-seater', 'Chaise Lounge', 'Modular'],
        colors: ['#008000', '#000080', '#800080'],
        sku: 22,
        soldCounts: 8
    },
    {
        details: {
            material: 'Metal',
            dimensions: '48"W x 36"H x 24"D',
            weight: '40 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f03',
        name: 'Outdoor Bench',
        image: [
            'https://images.unsplash.com/photo-1553064546-aab91ec77568?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1533457268547-b65392cdbba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-e8125a17c37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1532365199385-0b4f6222fcfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1581613856477-f65208436a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0JTIwZG9vciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
        ],
        price: 249.99,
        discount_price: 199.99,
        reviewsNumber: 10,
        ratings: 4.2,
        availability: true,
        brand: "Nature's Retreat",
        category: 'outdoor',
        description: 'A sturdy outdoor bench for enjoying your garden or patio.',
        colors: ['#808080', '#FFD700', '#008000'],
        sku: 25,
        soldCounts: 12
    },
    {
        details: { material: 'Canvas', dimensions: '24" x 36"', weight: '5 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f13',
        name: 'Bedroom Wall Art',
        image: [
            'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1532344214108-1b6d425db572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1600210491305-7396500b5b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 6,
        ratings: 4,
        availability: true,
        brand: 'Artistic Expressions',
        category: 'bedroom',
        description: 'Beautiful wall art to add character and style to your bedroom.',
        colors: ['#FFD700', '#800080', '#008080'],
        sku: 25,
        soldCounts: 12
    },
    {
        details: { material: 'Cotton', dimensions: '50" x 60"', weight: '1 lb' },
        sizes: [],
        id: '664d41d3538b522e53979f16',
        name: 'Bedroom Throw Blanket',
        image: [
            'https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1532344214108-1b6d425db572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1600210491305-7396500b5b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 29.99,
        discount_price: 24.99,
        reviewsNumber: 3,
        ratings: 3,
        availability: true,
        brand: 'Cozy Comfort',
        category: 'bedroom',
        description: 'A soft and cozy throw blanket to keep you warm on chilly nights.',
        colors: ['#A52A2A', '#D2691E', '#000080'],
        sku: 30,
        soldCounts: 20
    },
    {
        details: { material: 'Carbon Steel', pieces: 6, weight: '10 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f1d',
        name: 'Non-Stick Bakeware Set',
        image: [
            'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1596205250168-c3583813eea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 59.99,
        discount_price: 49.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'BakeMaster',
        category: 'kitchen',
        description: 'A versatile non-stick bakeware set for baking delicious treats.',
        colors: ['#A9A9A9'],
        sku: 30,
        soldCounts: 25
    },
    {
        details: {
            material: 'Plastic',
            features: 'Digital Display',
            weight: '2 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f23',
        name: 'Kitchen Scale',
        image: [
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1596205250168-c3583813eea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1676321046449-3acb3cd47e81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 29.99,
        discount_price: 24.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Precision Measure',
        category: 'kitchen',
        description: 'A handy kitchen scale for accurate measurement of ingredients.',
        colors: ['#A9A9A9'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            color: 'Beige',
            material: 'Fabric',
            dimensions: '32"W x 34"H x 30"D'
        },
        sizes: [],
        id: '664d41d3538b522e53979f27',
        name: 'Accent Armchair',
        image: [
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 299.99,
        discount_price: 259.99,
        reviewsNumber: 35,
        ratings: 4.7,
        availability: true,
        brand: 'Comfort Plus',
        category: 'living room',
        description: 'An elegant and comfortable accent armchair to complement your living room decor.',
        colors: ['#F5F5DC'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            material: 'Linen',
            dimensions: '78"W x 32"H x 36"D',
            weight: '110 lbs'
        },
        id: '664d41d3538b522e53979eee',
        name: 'Minimalist Linen Sofa',
        image: [
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHC6k6ZnjC_rZzPweSMId3YqW1nWRmPe3XtQJuh9oZ4aslI8MOBocl3YWyFq2X',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnZZs_qW4fk1v0v5nmGgokeGin_ZndIxjBwSOSxCntKaggWRPGOGFf2M6sNOLd',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9-nx2E0xE9Ob8aktjxytbjWnABn4H39gA8hjUMUCTzvRpBNfURnqFFx74_x4',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDiiWE0GMwJkOKOvQnZKts4uyAISrtEFSRWyKllOTad41kXpa0WRWQtRuqgWKp'
        ],
        price: 749.99,
        discount_price: 699.99,
        reviewsNumber: 15,
        ratings: 4.3,
        availability: true,
        brand: 'Simple Living',
        category: 'sofa',
        description: 'A minimalist linen sofa that brings a sense of tranquility to your home.',
        sizes: ['2-seater', 'Sleeper Sofa', 'Futon'],
        colors: ['#FFFFFF', '#F5F5F5', '#D3D3D3'],
        sku: 45,
        soldCounts: 25
    },
    {
        details: {
            material: 'Metal',
            dimensions: '36"W x 30"H x 12"D',
            weight: '20 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f09',
        name: 'Outdoor Plant Stand',
        image: [
            'https://images.unsplash.com/photo-1533457268547-b65392cdbba7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1553064546-e8125a17c37c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1532365199385-0b4f6222fcfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG91dCUyMGRvb3IlMjBwcm9kdWN0fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1581613856477-f65208436a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0JTIwZG9vciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560410285-077766a648fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0JTIwZG9vciUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 6,
        ratings: 4,
        availability: true,
        brand: 'Garden Elegance',
        category: 'outdoor',
        description: 'A decorative outdoor plant stand to showcase your favorite plants.',
        colors: ['#808080', '#008080', '#800080'],
        sku: 20,
        soldCounts: 12
    },
    {
        details: { material: 'Wood', dimensions: '84"L x 60"W', weight: '100 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f0b',
        name: 'Queen Size Bed Frame',
        image: [
            'https://images.unsplash.com/photo-1532344214108-1b6d425db572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1600210491305-7396500b5b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1622127922040-13cab637ee78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 699.99,
        discount_price: 599.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'Sleep Haven',
        category: 'bedroom',
        description: 'A stylish and sturdy queen size bed frame for a comfortable sleep.',
        colors: ['#8B4513', '#4169E1', '#228B22'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: {
            material: 'Wood',
            dimensions: '24"W x 24"H x 18"D',
            weight: '30 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f0c',
        name: 'Nightstand with Drawer',
        image: [
            'https://images.unsplash.com/photo-1600210491305-7396500b5b31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1622127922040-13cab637ee78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 149.99,
        discount_price: 129.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Home Harmony',
        category: 'bedroom',
        description: 'A compact nightstand with a convenient drawer for storing essentials.',
        colors: ['#A52A2A', '#D2691E', '#000080'],
        sku: 20,
        soldCounts: 12
    },
    {
        details: {
            material: 'Wood',
            dimensions: '72"W x 84"H x 24"D',
            weight: '200 lbs'
        },
        sizes: [],
        id: '664d41d3538b522e53979f0f',
        name: 'Wardrobe Closet',
        image: [
            'https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1622127922040-13cab637ee78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJlZHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 1299.99,
        discount_price: 1199.99,
        reviewsNumber: 18,
        ratings: 4.5,
        availability: true,
        brand: 'Closet Creations',
        category: 'bedroom',
        description: 'A spacious wardrobe closet for organizing clothes and accessories.',
        colors: ['#A52A2A', '#D2691E', '#000080'],
        sku: 8,
        soldCounts: 4
    },
    {
        details: { material: 'Stainless Steel', pieces: 10, weight: '15 lbs' },
        sizes: [],
        id: '664d41d3538b522e53979f1c',
        name: 'Stainless Steel Cookware Set',
        image: [
            'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1596205250168-c3583813eea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1676321046449-3acb3cd47e81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1538944570562-2c9cb7857097?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D'
        ],
        price: 199.99,
        discount_price: 169.99,
        reviewsNumber: 30,
        ratings: 4.8,
        availability: true,
        brand: "Chef's Choice",
        category: 'kitchen',
        description: 'A complete stainless steel cookware set for all your cooking needs.',
        colors: ['#A9A9A9'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: { color: 'Navy Blue', material: 'Fleece', dimensions: '50" x 60"' },
        sizes: [],
        id: '664d41d3538b522e53979f34',
        name: 'Throw Blanket',
        image: [
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 49.99,
        discount_price: 39.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Cozy Comforts',
        category: 'living room',
        description: 'A soft and cozy throw blanket to keep you warm during chilly evenings in the living room.',
        colors: ['#000080'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            color: 'Espresso',
            material: 'Wood',
            dimensions: '48"W x 16"D x 30"H'
        },
        sizes: [],
        id: '664d41d3538b522e53979f2f',
        name: 'Sofa Table',
        image: [
            'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1691642677915-a0d6d21430e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 129.99,
        discount_price: 109.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Table Trends',
        category: 'living room',
        description: 'A versatile sofa table to complete the look of your living room ensemble.',
        colors: ['#654321'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: 'King',
            material: 'Polyester',
            thickness: 'Fits mattresses up to 18 inches deep',
            closure: 'Zippered closure'
        },
        sizes: [],
        id: '664d41d3538b522e53979f49',
        name: 'Mattress Encasement',
        image: [
            'https://images.unsplash.com/photo-1688384452551-5cacc39946e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1686827986080-8ee55b055a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1647376036543-f9f543601a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1711302764893-07c55615416d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 59.99,
        discount_price: 49.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'SafeGuard',
        category: 'mattress',
        description: 'Protect your mattress from bed bugs, dust mites, and allergens with our mattress encasement.',
        colors: ['#FFFFFF'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            color: 'Cherry',
            material: 'Wood',
            dimensions: '24"W x 24"D x 24"H'
        },
        sizes: [],
        id: '664d41d3538b522e53979f32',
        name: 'End Table',
        image: [
            'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1691642677915-a0d6d21430e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 79.99,
        discount_price: 69.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'FurniCraft',
        category: 'living room',
        description: 'A stylish end table to complement your living room seating ensemble.',
        colors: ['#800000'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            color: 'White',
            material: 'Metal',
            dimensions: '52" blades',
            fanType: 'Standard'
        },
        sizes: [],
        id: '664d41d3538b522e53979f33',
        name: 'Ceiling Fan',
        image: [
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1691642677915-a0d6d21430e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 129.99,
        discount_price: 109.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'BreezeMax',
        category: 'living room',
        description: 'A functional ceiling fan to circulate air and add comfort to your living room.',
        colors: ['#FFFFFF'],
        sku: 22,
        soldCounts: 17
    },
    {
        details: {
            size: 'Full',
            material: 'High-Density Foam',
            thickness: '8 inches',
            firmness: 'Firm'
        },
        sizes: [],
        id: '664d41d3538b522e53979f41',
        name: 'Firm Mattress',
        image: [
            'https://images.unsplash.com/photo-1688384452844-8364c3e2fc28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1686827986080-8ee55b055a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1647376036543-f9f543601a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1711302764893-07c55615416d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1506720186575-11354d325017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 349.99,
        discount_price: 299.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Sturdy Sleep',
        category: 'mattress',
        description: "Get the support you need for a restful night's sleep with our firm mattress.",
        colors: ['#FFFFFF'],
        sku: 22,
        soldCounts: 17
    },
    {
        details: {
            size: 'Queen',
            material: 'Polyester',
            thickness: 'Fits up to 14 inches deep'
        },
        sizes: [],
        id: '664d41d3538b522e53979f44',
        name: 'Waterproof Mattress Protector',
        image: [
            'https://images.unsplash.com/photo-1686827986080-8ee55b055a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1647376036543-f9f543601a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1711302764893-07c55615416d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1506720186575-11354d325017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1668747766347-d1df9a9ea08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 29.99,
        discount_price: 24.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Guardian Bedding',
        category: 'mattress',
        description: 'Protect your mattress from spills, stains, and allergens with our waterproof mattress protector.',
        colors: ['#FFFFFF'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            size: 'Queen',
            material: 'Polyethylene',
            thickness: '4 mil',
            closure: 'Zipper closure'
        },
        sizes: [],
        id: '664d41d3538b522e53979f48',
        name: 'Mattress Bag',
        image: [
            'https://images.unsplash.com/photo-1647376036543-f9f543601a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1711302764893-07c55615416d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1506720186575-11354d325017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1668747766347-d1df9a9ea08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 19.99,
        discount_price: 14.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Protect-A-Bed',
        category: 'mattress',
        description: 'Protect your mattress during storage or moving with our heavy-duty mattress bag.',
        colors: ['#FFFFFF'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            color: 'Multi-color',
            material: 'Canvas',
            dimensions: '24" x 36"'
        },
        sizes: [],
        id: '664d41d3538b522e53979f2c',
        name: 'Wall Art',
        image: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1691642677915-a0d6d21430e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1542928658-22251e208ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 99.99,
        discount_price: 79.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Artistic Expressions',
        category: 'living room',
        description: 'A vibrant piece of wall art to enhance the visual appeal of your living room.',
        colors: ['#FFFFFF'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: {
            color: 'Assorted',
            material: 'Polyester',
            dimensions: '18" x 18"',
            setCount: 3
        },
        sizes: [],
        id: '664d41d3538b522e53979f2d',
        name: 'Throw Pillows',
        image: [
            'https://plus.unsplash.com/premium_photo-1691642677915-a0d6d21430e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1542928658-22251e208ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 29.99,
        discount_price: 24.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Pillow Palace',
        category: 'living room',
        description: 'A set of stylish throw pillows to add comfort and flair to your living room furniture.',
        colors: ['#A9A9A9'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            color: 'Walnut',
            material: 'Wood',
            dimensions: '36"W x 12"D x 72"H',
            shelfCount: 5
        },
        sizes: [],
        id: '664d41d3538b522e53979f2b',
        name: 'Bookshelf',
        image: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1542928658-22251e208ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 179.99,
        discount_price: 159.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'Book Haven',
        category: 'living room',
        description: 'A spacious bookshelf to showcase your favorite reads and decorative items.',
        colors: ['#654321'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            color: 'Turquoise',
            material: 'Fabric',
            dimensions: '24" diameter x 12"H'
        },
        sizes: [],
        id: '664d41d3538b522e53979f35',
        name: 'Floor Pouf',
        image: [
            'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1542928658-22251e208ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 59.99,
        discount_price: 49.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Urban Chic',
        category: 'living room',
        description: 'A versatile floor pouf that serves as both extra seating and a decorative accent in your living room.',
        colors: ['#40E0D0'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: { color: 'Silver', material: 'Glass', dimensions: '24"W x 72"H' },
        sizes: [],
        id: '664d41d3538b522e53979f2e',
        name: 'Floor Mirror',
        image: [
            'https://images.unsplash.com/photo-1542928658-22251e208ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1614622352876-4a90d2515f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 149.99,
        discount_price: 129.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Reflective Designs',
        category: 'living room',
        description: 'A sleek floor mirror to create the illusion of space and light in your living room.',
        colors: ['#C0C0C0'],
        sku: 22,
        soldCounts: 17
    },
    {
        details: {
            size: 'Queen',
            material: 'Gel Memory Foam',
            thickness: '12 inches',
            firmness: 'Medium-Firm'
        },
        sizes: [],
        id: '664d41d3538b522e53979f3f',
        name: 'Gel Memory Foam Mattress',
        image: [
            'https://plus.unsplash.com/premium_photo-1711302764893-07c55615416d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1506720186575-11354d325017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1668747766347-d1df9a9ea08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 599.99,
        discount_price: 549.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'CoolSleep',
        category: 'mattress',
        description: 'Stay cool and comfortable all night with our gel memory foam mattress.',
        colors: ['#FFFFFF'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            color: 'Bronze',
            material: 'Metal',
            dimensions: '18"H',
            bulbType: 'Incandescent'
        },
        sizes: [],
        id: '664d41d3538b522e53979f36',
        name: 'Table Lamp',
        image: [
            'https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1614622352876-4a90d2515f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1678790910436-49d06ab3a62b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 39.99,
        discount_price: 29.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Luminance',
        category: 'living room',
        description: 'A classic table lamp to provide task lighting and enhance the ambiance of your living room.',
        colors: ['#CD7F32'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: 'Full',
            material: 'Innerspring',
            thickness: '10 inches',
            firmness: 'Medium-Soft'
        },
        sizes: [],
        id: '664d41d3538b522e53979f3c',
        name: 'Innerspring Mattress',
        image: [
            'https://images.unsplash.com/photo-1506720186575-11354d325017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1668747766347-d1df9a9ea08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1680822725802-6f11cbcf3793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 399.99,
        discount_price: 349.99,
        reviewsNumber: 35,
        ratings: 4.7,
        availability: true,
        brand: 'SleepWell',
        category: 'mattress',
        description: "Get the support you need for a restful night's sleep with our innerspring mattress.",
        colors: ['#FFFFFF'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            size: 'Twin XL',
            material: 'Memory Foam and Pillow Top',
            thickness: '14 inches',
            firmness: 'Plush'
        },
        sizes: [],
        id: '664d41d3538b522e53979f3e',
        name: 'Pillow Top Mattress',
        image: [
            'https://plus.unsplash.com/premium_photo-1668747766347-d1df9a9ea08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1680822725802-6f11cbcf3793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1684175656077-1db68058055b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 599.99,
        discount_price: 549.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'Luxury Rest',
        category: 'mattress',
        description: 'Sink into plush comfort and support with our pillow top mattress.',
        colors: ['#FFFFFF'],
        sku: 30,
        soldCounts: 25
    },
    {
        details: {
            size: 'Twin',
            material: 'Memory Foam',
            thickness: '10 inches',
            firmness: 'Plush'
        },
        sizes: [],
        id: '664d41d3538b522e53979f43',
        name: 'Plush Mattress',
        image: [
            'https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1680822725802-6f11cbcf3793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1684175656077-1db68058055b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1680703008401-c5daa1789316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww'
        ],
        price: 449.99,
        discount_price: 399.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'SoftDreams',
        category: 'mattress',
        description: 'Indulge in plush comfort and support with our soft mattress.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: '16 oz',
            scent: 'Lavender',
            use: 'Spray directly onto mattress surface, no rinsing required'
        },
        sizes: [],
        id: '664d41d3538b522e53979f4a',
        name: 'Mattress Cleaner Spray',
        image: [
            'https://images.unsplash.com/photo-1691703028663-c5ff8cbb07c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1680822725802-6f11cbcf3793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1684175656077-1db68058055b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1680703008401-c5daa1789316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1692104631460-4b9dff3afa14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 14.99,
        discount_price: 12.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'CleanSleep',
        category: 'mattress',
        description: 'Keep your mattress clean and fresh with our mattress cleaner spray.',
        colors: ['#FFFFFF'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            color: 'Silver',
            material: 'Metal',
            dimensions: '24" diameter',
            batteryType: 'AA'
        },
        sizes: [],
        id: '664d41d3538b522e53979f31',
        name: 'Wall Clock',
        image: [
            'https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1614622352876-4a90d2515f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1678790910436-49d06ab3a62b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 39.99,
        discount_price: 29.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'Timeless Classics',
        category: 'living room',
        description: 'A stylish wall clock to keep you on schedule while adding a decorative touch to your living room.',
        colors: ['#C0C0C0'],
        sku: 25,
        soldCounts: 20
    },
    {
        details: {
            color: 'Beige',
            material: 'Polyester',
            dimensions: '84"H x 52"W',
            setCount: 2
        },
        sizes: [],
        id: '664d41d3538b522e53979f37',
        name: 'Curtains',
        image: [
            'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1614622352876-4a90d2515f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1678790910436-49d06ab3a62b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 49.99,
        discount_price: 39.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Window Wonders',
        category: 'living room',
        description: 'A set of elegant curtains to add privacy and style to your living room windows.',
        colors: ['#F5F5DC'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            color: 'Black',
            material: 'Metal',
            dimensions: '30"H x 12"D',
            tierCount: 2
        },
        sizes: [],
        id: '664d41d3538b522e53979f39',
        name: 'Plant Stand',
        image: [
            'https://images.unsplash.com/photo-1614622352876-4a90d2515f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1678790910436-49d06ab3a62b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 24.99,
        discount_price: 19.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Botanical Accents',
        category: 'living room',
        description: 'A sleek plant stand to showcase your favorite houseplants in your living room.',
        colors: ['#000000'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            size: 'Queen',
            material: 'Memory Foam',
            thickness: '12 inches',
            firmness: 'Medium'
        },
        sizes: [],
        id: '664d41d3538b522e53979f3a',
        name: 'Memory Foam Mattress',
        image: [
            'https://plus.unsplash.com/premium_photo-1680822725802-6f11cbcf3793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1684175656077-1db68058055b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1680703008401-c5daa1789316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1692104631460-4b9dff3afa14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1700685893527-d450f7885ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 499.99,
        discount_price: 449.99,
        reviewsNumber: 50,
        ratings: 4.9,
        availability: true,
        brand: 'Cloud Comfort',
        category: 'mattress',
        description: 'Experience ultimate comfort and support with our premium memory foam mattress.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: 'King',
            material: 'Memory Foam and Pocket Coils',
            thickness: '14 inches',
            firmness: 'Medium-Firm'
        },
        sizes: [],
        id: '664d41d3538b522e53979f3b',
        name: 'Hybrid Mattress',
        image: [
            'https://plus.unsplash.com/premium_photo-1684175656077-1db68058055b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1680703008401-c5daa1789316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1692104631460-4b9dff3afa14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1700685893527-d450f7885ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1698465326170-f46033b4b5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 699.99,
        discount_price: 599.99,
        reviewsNumber: 40,
        ratings: 4.8,
        availability: true,
        brand: 'DreamSlumber',
        category: 'mattress',
        description: 'Indulge in the perfect balance of comfort and support with our hybrid mattress.',
        colors: ['#FFFFFF'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: { size: 'Full', material: 'Memory Foam', thickness: '3 inches' },
        sizes: [],
        id: '664d41d3538b522e53979f46',
        name: 'Mattress Topper',
        image: [
            'https://images.unsplash.com/photo-1680703008401-c5daa1789316?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1hdHRyZXNzJTIwcGFkfGVufDB8fDB8fHww',
            'https://plus.unsplash.com/premium_photo-1692104631460-4b9dff3afa14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1700685893527-d450f7885ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1698465326170-f46033b4b5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 99.99,
        discount_price: 79.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Comfort Plus',
        category: 'mattress',
        description: "Enhance your mattress's comfort and support with our premium mattress topper.",
        colors: ['#FFFFFF'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            size: 'California King',
            material: 'Latex',
            thickness: '12 inches',
            firmness: 'Medium-Firm'
        },
        sizes: [],
        id: '664d41d3538b522e53979f3d',
        name: 'Latex Mattress',
        image: [
            'https://plus.unsplash.com/premium_photo-1692104631460-4b9dff3afa14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1700685893527-d450f7885ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1698465326170-f46033b4b5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1650768673967-9f3bde5f90ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 799.99,
        discount_price: 699.99,
        reviewsNumber: 30,
        ratings: 4.6,
        availability: true,
        brand: 'Natural Sleep',
        category: 'mattress',
        description: 'Experience superior support and breathability with our natural latex mattress.',
        colors: ['#FFFFFF'],
        sku: 18,
        soldCounts: 12
    },
    {
        details: {
            size: 'Queen',
            material: 'Metal',
            height: '14 inches',
            assembly: 'Easy assembly, no tools required'
        },
        sizes: [],
        id: '664d41d3538b522e53979f47',
        name: 'Mattress Foundation',
        image: [
            'https://plus.unsplash.com/premium_photo-1700685893527-d450f7885ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1698465326170-f46033b4b5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1650768673967-9f3bde5f90ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1594295850094-1add5ccb66f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 149.99,
        discount_price: 129.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Steady Support',
        category: 'mattress',
        description: 'Provide sturdy support for your mattress with our durable mattress foundation.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: 'Queen',
            material: 'Cotton',
            threadCount: 400,
            deepPocket: 'Fits mattresses up to 18 inches deep',
            setCount: 4
        },
        sizes: [],
        id: '664d41d3538b522e53979f45',
        name: 'Fitted Sheet Set',
        image: [
            'https://images.unsplash.com/photo-1698465326170-f46033b4b5d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1650768673967-9f3bde5f90ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1594295850094-1add5ccb66f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1672680514924-1f9dbbd5b58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 39.99,
        discount_price: 34.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'Dreamy Nights',
        category: 'mattress',
        description: 'Experience luxurious comfort with our high-quality fitted sheet set.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: { color: 'Beige', material: 'Wool', dimensions: "9' x 12'" },
        sizes: [],
        id: '664d41d3538b522e53979f30',
        name: 'Area Rug',
        image: [
            'https://plus.unsplash.com/premium_photo-1678790910436-49d06ab3a62b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 179.99,
        discount_price: 159.99,
        reviewsNumber: 25,
        ratings: 4.7,
        availability: true,
        brand: 'RugMasters',
        category: 'living room',
        description: 'A luxurious area rug to add warmth and texture to your living room flooring.',
        colors: ['#F5F5DC'],
        sku: 15,
        soldCounts: 10
    },
    {
        details: {
            color: 'White',
            material: 'Wood',
            dimensions: '24"W x 6"D x 8"H'
        },
        sizes: [],
        id: '664d41d3538b522e53979f38',
        name: 'Wall Shelf',
        image: [
            'https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D'
        ],
        price: 34.99,
        discount_price: 29.99,
        reviewsNumber: 15,
        ratings: 4.5,
        availability: true,
        brand: 'ShelfMaster',
        category: 'living room',
        description: 'A simple and functional wall shelf to display decorative items in your living room.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: 'King',
            material: 'Orthopedic Foam',
            thickness: '10 inches',
            firmness: 'Firm'
        },
        sizes: [],
        id: '664d41d3538b522e53979f40',
        name: 'Orthopedic Mattress',
        image: [
            'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1650768673967-9f3bde5f90ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1594295850094-1add5ccb66f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1672680514924-1f9dbbd5b58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D'
        ],
        price: 699.99,
        discount_price: 649.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'OrthoSleep',
        category: 'mattress',
        description: 'Experience superior support and alleviate pressure points with our orthopedic mattress.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    },
    {
        details: {
            size: 'Queen',
            material: 'Memory Foam and Euro Top',
            thickness: '12 inches',
            firmness: 'Medium-Firm'
        },
        sizes: [],
        id: '664d41d3538b522e53979f42',
        name: 'Euro Top Mattress',
        image: [
            'https://images.unsplash.com/photo-1650768673967-9f3bde5f90ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1594295850094-1add5ccb66f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1672680514924-1f9dbbd5b58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMwfHxtYXR0cmVzcyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1688384452551-5cacc39946e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0dHJlc3MlMjBwYWR8ZW58MHx8MHx8fDA%3D'
        ],
        price: 499.99,
        discount_price: 449.99,
        reviewsNumber: 20,
        ratings: 4.6,
        availability: true,
        brand: 'EuroComfort',
        category: 'mattress',
        description: 'Experience luxurious comfort and support with our euro top mattress.',
        colors: ['#FFFFFF'],
        sku: 20,
        soldCounts: 15
    }
]

export default allData;