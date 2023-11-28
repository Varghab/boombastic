class ApiFeatures{   
    constructor(query, querystr){
        this.query = query;
        this.querystr = querystr;
    }
    search(){
        const keyword = this.querystr.keyword ? {
                name: new RegExp(this.querystr.keyword, 'i')
            }:{};
        this.query = this.query.find(keyword)
        return this;
    }
    filter(){
        const queryObj = {...this.querystr};
        const removable = ['keyword', 'page', 'limit'];
        removable.forEach(key=> delete queryObj[key]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=> `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(resultsPerPage){
        const currentPage = Number(this.querystr.page) || 1;
        const skip = resultsPerPage * (currentPage-1);
        this.query = this.query.limit(resultsPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures