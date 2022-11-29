app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"jc.demoservice.v1_.services:helloWorld","description":"# Demo service, that simply output a localised greeting for the given name.  \n###### version 1.0\n\n**INPUT** \n*name* - (required) name of person to be greeted \n\n**OUTPUT**\n*greeting* - localised greeting including name of person \n \n**EXCEPTION**\n*InvalidNameException* - triggered in \u0027xxx\u0027 given as name \n\n**HISTORY** \nVersion 3.0 (04/04/19) - JC - Update \n- trace is logged to custom file in resources/files \n \nVersion 1.0 (10/10/18) - JC - New \n- Initial rollout","serviceinputs":[{"inputName":"name","inputType":"String","inputComments":"no comment","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"greeting","outputType":"String","outputComments":"no comment","required":true,"wrapperType":"--"}]}];
}
this.getISEndpoint = function() { 
 return 'http://192.168.1.200:5555/';
}
this.getAPIList = function() { 
 return [{"name":"jc.demoservice:api","spec":{"swagger":"2.0","info":{"description":"This is a demonstration of how easy it is to build and document your APIs using webMethods Integration.","version":"1.0","title":"HelloWorld demo API"},"host":"localhost:5555","basePath":"/rad/jc.demoservice:api","consumes":["application/json"],"produces":["application/json"],"paths":{"/v1/greet":{"get":{"description":"# Demo service, that simply output a localised greeting for the given name.  \n###### version 1.0\n\n**INPUT** \n*name* - (required) name of person to be greeted \n\nOUTPUT\n*greeting* - localised greeting including name of person \n \n**EXCEPTION**\n*InvalidNameException* - triggered in \u0027xxx\u0027 given as name \n\n**HISTORY** \nVersion 3.0 (04/04/19) - JC - Update \n- trace is logged to custom file in resources/files \n \nVersion 1.0 (10/10/18) - JC - New \n- Initial rollout ","operationId":"v1greet_GET_1","parameters":[{"name":"name","in":"query","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/v1greet_GET_response"}},"401":{"description":"Access Denied"}}}}},"definitions":{"v1greet_GET_response":{"required":["greeting"],"properties":{"greeting":{"type":"string"}}}},"schemes":["HTTP"]}}];
}
this.getCreatedTime = function() { 
 return "29-11-2022 09:50:01 CET";
}
this.getPackageInfo = function(){
 return{"packageName":"JcDemoService","displayName":"HelloWorld Microservice","status":"Prototype","tags":["api","demo","tech_community"],"createdDate":"28-11-2022 11:42:20 CET","version":"1.0","buildNumber":"","description":"Demonstration package for https://tech.forums.softwareag.com"};
}
});
