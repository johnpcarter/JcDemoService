#  Make sure that you have already pulled the image from our containers.softwareag.com site
FROM sagcr.azurecr.io/webmethods-microservicesruntime:10.15.0.0
# Uncomment the following line if you don't have empower credentials
#FROM softwareag/webmethods-microservicesruntime:10.15
LABEL MAINTAINER="" \
	DESCRIPTION="" \
	COMMENT="example Micro service using webMethods" \
	CUSTOM="true" \
	SAG="true" \
	BUILD=build-msc-00002 \
	BUILD-TEMPLATE="demo service" \
	TYPE="Micro Service" 
#user root

# define exposed ports
	
EXPOSE 5555	
EXPOSE 9999	

# user to be used when running scripts
USER sagadmin

# files to be added to based image (includes configuration and package)

# If you want add your own license key, then remove the comment and put your license file in the same directory as this dockerFile
#ADD --chown=sagadmin ./licenseKey.xml /opt/softwareag/IntegrationServer/config/licenseKey.xml				
ADD --chown=sagadmin ./resources/demo-service.properties /opt/softwareag/IntegrationServer/application.properties
# We will use this file instead when deploying to k8s as we need to change the DB endpoint to a k8s service.				
ADD --chown=sagadmin ./resources/demo-service-k8s.properties /opt/softwareag/IntegrationServer/application-k8s.properties				

ADD --chown=sagadmin . /opt/softwareag/IntegrationServer/packages/JcDemoService	

ADD --chown=sagadmin ./resources/mysql-connector-java-8.0.11.jar /opt/softwareag/IntegrationServer/lib/jars			
