const database = require('../services/database')

exports.getAllUsers = async (req, res) => {
    
    const { name , orderBy, isAscending, pageNumber, limit } = req.query;
    
    let order;
    if (isAscending === "true") {
        order = "ASC"; // Atur order menjadi "ASC" jika true
    } else {
        order = "DESC"; // Atur order menjadi "DESC" jika false
    }

    // Mulai dengan query dasar
    let SQLQuery = `SELECT * FROM public."User" WHERE 1=1`;
    let countQuery = `SELECT COUNT(*) FROM public."User" WHERE 1=1`;
   

    // Tambahkan filter untuk name jika tidak kosong
    if (name) {
        SQLQuery += ` AND "Name" LIKE '%${name}%'`;
        countQuery += ` AND "Name" LIKE '%${name}%'`;
        
    }

    if (orderBy) {
        SQLQuery += ` ORDER BY "${orderBy}" ${order}`;
    }

     // Pagination - tentukan offset dan limit
     const offset = (pageNumber - 1) * limit;
     SQLQuery += ` LIMIT ${limit} OFFSET ${offset}`;
    
    try {
        const result = await database.pool.query(SQLQuery)
        const countResult = await database.pool.query(countQuery);
        const totalRecords = parseInt(countResult.rows[0].count, 10);

        // Menghitung total pages
        const totalPages = Math.ceil(totalRecords / limit);

        // return res.status(200).json(result.rows)
        return res.status(200).json({ 
            data: result.rows,
            totalRecords,
            totalPages,
            pageNumber
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}