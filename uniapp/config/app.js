/** S 是否H5端 **/
// #ifdef H5
const IS_H5 = true
// #endif

// #ifndef H5
const IS_H5 = false
// #endif
/** E 是否H5端 **/

/** S API BaseURL **/
const baseURLMap = {
	// 开发环境 
	development: 'http://127.0.0.1:20208/api',
	// 生产环境
	production: IS_H5 ? location.origin +'/api/' : 'http://127.0.0.1:20208/api',
}

const baseURL = baseURLMap[process.env.NODE_ENV]


/** E API BaseURL **/


module.exports = {
    HEADER: {
        'content-type': 'application/json'
    },
	baseURL,					// API Base URL
}
