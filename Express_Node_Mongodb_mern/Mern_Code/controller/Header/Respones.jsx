


const Respones_H=(req,res)=>{

 res.set({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Frame-Options': 'DENY',
    'Strict-Transport-Security': 'max-age=31536000',
    'X-Custom-Header': 'Interview-Demo'
  });

    
}