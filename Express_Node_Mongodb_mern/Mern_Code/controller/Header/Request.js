// ✔ Request Headers (client → server)
// ✔ Response Headers (server → client)

const Request_H = (req, res) => {

    // ⭐ All request headers
    const headers = req.headers;

    // ⭐ Client IP address
    const ip = req.ip;

    // ⭐ Host header (domain:port)
    const host = req.headers.host;

    // ⭐ Browser info (User-Agent header)
    const browser = req.headers['user-agent'];

    // ⭐ Send custom response
    res.status(200).json({
        message: "Request headers received",
        ip,
        host,
        browser,
        headers
    });
};


export default Request_H