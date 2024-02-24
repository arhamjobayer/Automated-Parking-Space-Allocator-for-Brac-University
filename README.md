# Automated-Parking-Space-Allocator-for-Brac-University

Parking for cars is a big problem these days, and it gets more and more necessary every day. Not only at Brac University but also in Bangladesh, the manual vehicle parking method is still in use, which contributes to issues like fuel and time-wasting when looking for available spots around the parking lot when we need to park our cars, which calls for enough illumination. Another problem is that there is no set method for parking, so anybody may park wherever which occasionally results in damage to the cars when they are being parked or moved out of the lot. There's also the problem of security.
We are proposing a new auto parking system to address these issues. With the help of a software, users of our service can easily book a parking space according to their needs and park their vehicles safely without taking any hassle. Combining the state of the art Software, Computer Vision and IOT technology, our system is promised to deliver a seamless parking solution for the people of Brac University.















Requirement Analysis

1. Online booking and reservation:
 a) Pre-booking Parking Spaces: Users can reserve and book parking spaces online in advance, making it easier to get a spot during crowded times or peak hours. By anticipating and controlling demand, pre-booking also helps parking operators.
b) Reservation Platforms and Apps: Users are able to remotely reserve parking spaces via a variety of mobile apps and web-based services. Customers may easily reserve a parking space with a few clicks on these sites, as it typically accepts a variety of payment methods.
c) License Plate detection for Entry/Exit : Users who make reservations are accepted for entry and exit by detecting the license plate number that allows them entry to the parking structure without taking any hassle of external ticketing or e-ticketing system. Physical tickets or permits are no longer required, thanks to this contactless entrance and leave procedure, which also improves customer convenience.




2. Automated Parking Solutions
System Overview

The automated parking solution aims to streamline parking management through a combination of computer vision, IoT devices, database integration, user interaction and an online payment system.


System Components

Computer Vision Component
Employs a license plate detection model (Based on Computer Vision) for vehicle identification.
Extracts license plate numbers upon vehicle entry and exit.
Cross-references extracted numbers with the database for authorization and give entrance.
IoT Component
Utilizes IoT devices within each parking space to ascertain occupancy status (vacant/occupied).
Communicates occupancy information to the central database real time to guide system decisions.
IoT devices are also installed on entrance gates to open the gates based on authorization status.


Workflow
Vehicle Arrival: Car arrives at the parking entrance.
License Plate Identification: Computer vision model captures and processes an image of the license plate, extracting the number.
Database Authorization:
Authorized: If the license plate is found in the database and linked to a valid booking, entrance is granted.
Unauthorized:
User is notified of the lack of booking. If vacant spaces exist, the system
Automatically assigns a space. (requires user registration)
Automatically initiates payment through the online gateway. (requires user registration).
      4. Occupancy Tracking: IoT sensors relay real-time occupancy updates to the database.
      5. Time Management:
The system initiates a timer upon authorized entry.
The timer is monitored against pre-allocated parking duration.
     6. Exit Scenarios
Within Timeframe: User exits without any incident.
Time Frame Exceeded:
Slot already booked: User is notified and charged a per-minute late fee.
Slot Vacant: User receives a prompt to extend the booking. If h/she extends then the extended period will be added otherwise h/she will be charged per minute late fee.




3. Payment And Billing Systems
a) Cashless Payment Options: Our parking system encourages cashless transactions by letting customers pay for parking using credit cards, mobile wallets, or payment applications, among other digital means.
b) Mobile Payment Solutions: By enabling customers to pay for parking directly with their cellphones, mobile payment solutions streamline the payment process and lessen the need for conventional payment methods.
c) Integration with Payment Gateways: To provide easy and safe transactions for consumers and parking operators alike, our parking system frequently interfaces with secure payment gateways.


4) User-Friendly Interface: 
a) Intuitive Websites: To improve the entire user experience, an interface must be easy to use. Users may easily obtain parking information with the use of our parking system software, which provide user-friendly websites with simple-to-use features.
b) Multilingual Support for Users: Multilingual assistance in our parking system serves a broad user base in multicultural settings, guaranteeing that everyone can communicate with the system with ease.
5) Maintenance And Support :
a) Regular System Maintenance : In order to guarantee smooth functioning and avert any problems, our parking system will be maintained periodically.
b) 24/7 Customer Support: When consumers have questions or encounter any technical issues, a dependable customer support system helps them and makes sure they have a good experience.
6) Security and Privacy Requirements: 
Ensuring strong security and privacy protections is critical to the success of the "Automatic Parking Space Allocator for BRAC University." The integration of an end-to-end encryption system, as well as the adoption of RFID technology using university ID cards, serve as the foundation of a comprehensive security framework. This not only secures sensitive information but also improves access control, ensuring that only authorized staff use the parking facilities.
Now the requirements are given below:

a) End-to-end encryption:
Implement a strong end-to-end encryption mechanism for administrative and user data.
Ensure data confidentiality and integrity by protecting sensitive information, such as car registration numbers.

b) RFID Technology:
Utilize RFID technology, with university ID cards acting as RFID tags.
Enhance access control by limiting parking lot entry to authorized persons, such as students, faculty, and staff.

c) Protected Information Privacy:
Create a privacy system to protect personal information while assuring the anonymity and security of user data.
Implement safeguards to keep car registration numbers and other sensitive information from unauthorized access.

d) Access Control for University ID Cards:
Use university ID cards as RFID tags to provide secure and seamless admission.
Increase the overall security of the parking solution by limiting access to authorized members of the university community.


e) Secure and efficient entry:
Prioritize a secure entrance system that uses RFID technology to prevent unauthorized access.
Ensure that the parking allocation system efficiently identifies and allows access to authorized users, hence improving the overall user experience.

Incorporating these security and privacy criteria, such as end-to-end encryption and RFID technology on university ID cards, provides a solid foundation for the "Automatic Parking Space Allocator for BRAC University." This comprehensive strategy not only safeguards sensitive information but also promotes efficient and secure access, ensuring users' trust and confidence in the automated parking system.

Specification
MERN Stack 
Computer Vision
IOT




Feasibility

1. Technical Feasibility: Technical feasibility for the "Automatic Parking Space Allocator for BRAC University" project includes a thorough assessment of its compatibility with BRAC University's technology infrastructure. Using the MERN stack (MongoDB, Express.js, React, and Node.js), computer vision, and IoT, the solution provides smooth integration and interoperability with current systems. The MERN stack serves as a solid basis for web development, while computer vision allows for sophisticated picture processing and real-time data collection via IoT components. Scalability, peak load handling, compliance with industry standards, and access to technical skills and resources are all important issues. This detailed study seeks to establish that the suggested solution not only combines cutting-edge technology but also aligns with BRAC University's technical capabilities, therefore eliminating possible risks to the automated parking system's effective deployment.

2. Operational Feasibility: Operational feasibility is critical to the success of the "Automatic Parking Space Allocator for BRAC University," which focuses on seamless integration with existing operational systems and optimizing parking management. The system is designed to work seamlessly with the university's regular activities, including management and communication systems. Priorities include efficient, user-friendly parking management and real-time monitoring. The operating system prioritizes adaptability and scalability, anticipating future changes and increases in parking demand. Ultimately, this strategic strategy improves the university's operational efficiency and effectiveness.
3. Economic Feasibility: Economic feasibility is critical to the success of the "Automatic Parking Space Allocator for BRAC University."  In addition to collecting a percentage from system users, who include individuals and organizations, the initiative includes a direct payment system for each car transaction. This method not only secures the project's long-term viability but also establishes a direct and profitable link between the system's success and income production, uniting the interests of BRAC University and its users.  This revenue-sharing model not only secures the project's viability but also links its success to the economic well-being of its users. Furthermore, the system's cost-effectiveness stands out. It optimizes resource utilization and operational costs by providing quality services for a cheaper investment and lowering dependency on human labor. This economically viable approach offers the project an efficient and appealing solution for both BRAC University and its users, ensuring long-term financial viability and service excellence.

4. Schedule Feasibility: This is a large-scale industrial project and it requires expertise to develop and a significant amount of testing as well as infrastructure for going into the market. Therefore, having immense expertise of our team members in the field of Software Development, Artificial Intelligence and Robotics we are hoping to develop a prototype working model within our assigned time period. 


