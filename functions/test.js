exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: 'Yey, Samson is on netlify functions',
    })
}