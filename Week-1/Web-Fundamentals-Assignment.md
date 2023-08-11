# Assignment
## 1. What is Protocol Stack and usages in web development?
The Protocol Stack is set of rules for devices to communicate with each other over internet. This set of rules organized in several layers and they build on top of each layer.

Here is each layer from Top to Bottom and each having its on Protocol:
- **Application Layer** : HTTP, HTTPS, TLS, DNS
- **Transport Layer** : TCP, UDP
- **Network Layer** : IP
- **Link Layer** : Ethernet

**Usages of Protocol stack**:
In link layer protocol stack, devices establish a physical connection through wire or wirless connection to transmit/receive digital data.Once devices establish their connection in link layer then Network layer protocol (IP) provides an address against each connected devices. Data then divided into several chunks of packets and Transport layer protocol takes the responsibility of successfull and reliable transmission of the data over internet. At the top layer ( application layer) protocol cater the services of handing over the data that has been requsested for to various application. This is how Protocol stack used when data travels through Internet.

## 2. Different types of web servers, and how do they differ in terms of functionality and performance.

Here are some the common types of web servers and their functionality and performace differences.

| Web server | Functionality | Performance |
| ------ | ------ |--------- |
| Apache | Apache is the oldest and most widely used web server. It is highly configurable that makes it hosting wide range of web application | It is known for stability and relability but not that good when it comes to high trafic scenario |
| Nginx | Nginx is an event-driven, lightweight web server designed to efficiently serve static and Dynamic content. | Nginx is known for its high performance and low memory footprint. It excels in serving static content,and handles concurrent request as well making it well suited for high traffic websites|
| IIS | IIS is a web server developed by Microsoft for Windows Server environments. | IIS offers good performance and stability in Windows-based environments. |


## 3. What is web hosting and what are the different types of hosting services available for websites?

**Web Hosting** : It is refer to the deployment of web site or web application in web server so that the application or site can be available in the internet.

These are common types of web hosting available :
- Dedicated hosting
- Shared hosting
- Cloud hosting
- VPS hosting
- Reseller Hosting


## 3. What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

**Scaling** : It is the process of increasing the capacity of webserver based on web sites requirement. Requirment includes request, traffic, users etc. We have two types of scaling i) Horizontal ii)  Vertical.

**Vertical Scaling** : It is also known as scaling up. It is the process of increasing resources like RAM, Processor etc as per demand. This types of scaling applies for small websites and when resources are limited.

**Horizontal Scaling**:  It is known as scaling out. In this process we add more severs as per requirements so that when demand rises multiple server can work together to combat the situation. This types of scaling usefull when we expect continous traffic and we have large website.

## 4. What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?

Search engine plays a crucial role in searching specific sites, products and many more over internet. It indexes and catalogs websites helping users discovers pecific things. Search engine optimization is the process of optimization that helps certain websites comes up in the rank during user search.

There are several techiques we can apply to get the best ranking of sites and below are some of the techniques:

- Providing essential Key Words in site content.
- Providing compelling meta tags and description in blog posts.
- Submitting site map into Google web master tool.
- Using prescribed domain names.
- Presence in social networking space.
- Website speed also matter big time for on page SEO.

