// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([
    { name: 'Pretend you got files from s3 from this API' },
    { name: 'fu charl' },    
  ])
}
