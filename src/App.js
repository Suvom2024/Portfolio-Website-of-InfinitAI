import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/sidebar-menu.css';
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt ,faQuoteLeft,faQuoteRight  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const ProjectGallery = ({ content = [] }) => {
  return (
    <Carousel className="project-gallery-carousel">
      {content.map((item, index) => (
        <Carousel.Item key={index}>
          {item.type === 'image' && (
            <img className="d-block w-100" src={item.src} alt={`Slide ${index + 1}`} />
          )}
          {item.type === 'text' && (
            <div className="project-description">
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
function App() {
  const [filter, setFilter] = useState('*');
  const [activeSection, setActiveSection] = useState('deneb_banner'); // New state variable for active section
  const [showGallery, setShowGallery] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };
  const testimonials = [
    {
      image: './magnus.jpeg',
      name: 'Magnus Mammy',
      title: 'Owner of Sembe',
      description:
        'Choosing InfinitiAI was the best decision we ever made for our digital transformation. Their team not only understood our vision but also brought it to life with their expertise and innovative approach. The results were nothing short of remarkable.',
    },
    {
      image: 'https://i1.rgstatic.net/ii/profile.image/365930749153296-1464256097477_Q128/Ranjit-Choudhury.jpg',
      name: 'Ranjit Choudhury',
      title: 'Owner of HomeBuyers Agency',
      description:
        'InfinitiAI consistently goes above and beyond. Their attention to detail and dedication to delivering top-tier work has had a tangible impact on our bottom line. They are not just a service provider they are an essential part of our team.',
    },
    {
      image: 'https://www.astro.princeton.edu/~rt3504/images/people/Screen%20Shot%202022-01-08%20at%204.00.53%20PM.png',
      name: 'Damien Roskar',
      title: 'Owner of ApexLiving',
      description:
        'The level of expertise and professionalism shown by InfinitiAI has been a game-changer for our business. From seamless data integration to creating user-friendly interfaces, their work has elevated our customer experience to new heights .',
    },
  ];
   const projectCategories = [
     { name: 'AI Products', filter: '.AI' },
     { name: 'Web Development', filter: '.WEB' },
     { name: 'Cloud Solutions', filter: '.DATA' },
     { name: 'ML & DS Solutions', filter: '.MLDS' },
     { name: 'Mobile App', filter: '.APP' },
   ];
  
   const projects = [
    {
      title: 'Data Analytics on Azure',
      category: 'Cloud Solutions',
      categories: ['DATA'],
      image: './Azure_1.jpeg',
      content: [
        {
          type: 'text',
          title: 'Scalable & Secure Data Analytics Platform on Microsoft Azure Cloud',
          description: `
            <p>In this project, we designed and implemented a robust and scalable data analytics platform leveraging the powerful services provided by Microsoft Azure Cloud. The primary objective was to enable seamless ingestion, storage, processing, and visualization of data from various sources, while ensuring data security and governance.</p>
            
            <p>The architecture encompassed the following key components:</p>
            
            <ul>
              <li><strong>Data Sources:</strong> We integrated multiple data sources, including on-premises Microsoft SQL Servers, other relational databases, Azure SQL Databases, Azure Table Storage, and Azure Cosmos DB. This allowed for the consolidation of data from diverse sources into a centralized repository.</li>
              
              <li><strong>Data Ingestion and Storage:</strong> Azure Data Factory was utilized as the orchestration layer, facilitating the automated extraction, transformation, and loading (ETL) of data from various sources into Azure Data Lake Storage. This scalable and secure data lake served as the central repository for all ingested data.</li>
              
              <li><strong>Data Processing and Analytics:</strong> Azure Synapse Analytics, a powerful analytics service, was employed for efficient data processing and advanced analytics. It enabled complex querying, data transformations, and machine learning model development and deployment, all within a secure and governed environment.</li>
              
              <li><strong>Authentication and Authorization:</strong> To ensure robust security and access control, Azure Active Directory was integrated into the platform, enabling centralized identity and access management for all services and resources.</li>
              
              <li><strong>Analysis and Visualization:</strong> Azure Analysis Services provided robust analytical capabilities, allowing for multidimensional data modeling and advanced data analysis. The insights derived from the data were then visualized through Power BI, a powerful business intelligence and data visualization tool.</li>
            </ul>
            
            <p>Throughout the project, we focused on implementing best practices for data governance, security, and compliance. Robust data encryption mechanisms were employed to protect sensitive information at rest and in transit. Access controls and audit trails were implemented to ensure data privacy and regulatory compliance.</p>
            
            <p>The end result was a scalable, secure, and high-performance data analytics platform that empowered our clients to derive actionable insights from their data, enabling informed decision-making and driving business growth.</p>
          `,
        },
      ],
    },
    {
      title: 'Microservices Architecture on Azure (AKS)',
      category: 'Cloud Solutions',
      categories: ['DATA'],
      image: './Azure_2.jpeg',
      content: [
        {
          type: 'text',
          title: 'Implementing a Containerized Microservices Architecture on Azure Kubernetes Service (AKS)',
          description: `
            <p>In this project, we designed and deployed a robust and scalable microservices-based application leveraging the Azure Kubernetes Service (AKS) and other Azure services. The primary objective was to build a highly available and easily maintainable application with a strong focus on DevOps practices and automated deployments.</p>
            
            <p>The architecture employed the following key components:</p>
            
            <ul>
              <li><strong>Azure Kubernetes Service (AKS):</strong> We utilized AKS as the core infrastructure for hosting and managing our containerized microservices. AKS provided a managed Kubernetes environment, ensuring high availability, scalability, and efficient resource utilization.</li>
              
              <li><strong>Containerized Microservices:</strong> The application was divided into multiple microservices, each encapsulated within Docker containers. This modular approach enabled independent development, deployment, and scaling of individual services, promoting agility and maintainability.</li>
              
              <li><strong>Front-end and Backend Services:</strong> The architecture included a front-end service, acting as the entry point for client applications, and multiple backend services responsible for handling various business logic and data processing tasks.</li>
              
              <li><strong>Ingress and Load Balancing:</strong> Azure Load Balancer and the Nginx Ingress Controller were utilized to distribute incoming traffic across the front-end and backend services, ensuring high availability and efficient load balancing.</li>
              
              <li><strong>Utility Services:</strong> We integrated several utility services within the Kubernetes cluster, including Elasticsearch for distributed search and analytics, Prometheus for monitoring and alerting, and Pod autoscaling for dynamic resource allocation based on demand.</li>
              
              <li><strong>External Data Stores:</strong> The application leveraged external data stores, such as SQL databases and Azure Cosmos DB, for persistent data storage and retrieval.</li>
              
              <li><strong>DevOps and Continuous Integration/Continuous Deployment (CI/CD):</strong> We implemented Azure Pipelines for automated build, testing, and deployment processes, enabling streamlined and consistent delivery of application updates. Docker images were pushed to the Azure Container Registry, facilitating efficient distribution and version management.</li>
                            
            </ul>
            
            <p>Throughout the project, we followed best practices for containerization, microservices architecture, and DevOps principles. This approach enabled efficient deployment, scaling, and management of the application, while ensuring high availability, resilience, and adherence to security and governance standards.</p>
          `,
        },
      ]
      },
      {
        title: 'Data Insights on Azure',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './Azure_3.png',
        content: [
          {
            type: 'text',
            title: 'Implementing a Scalable and Integrated Data Analytics Platform on Azure',
            description: `
              <p>In this project, we designed and implemented a comprehensive data analytics platform leveraging various Azure services to enable seamless data ingestion, processing, and serving of insights. The primary objective was to build a scalable and integrated solution that could handle large volumes of data from multiple sources and provide advanced analytics capabilities.</p>
              
              <p>The architecture encompassed the following key components:</p>
              
              <ul>
                <li><strong>Data Ingestion:</strong> Azure Event Hubs and Azure Data Factory were utilized for efficient data ingestion and orchestration of ETL processes.</li>
                <li><strong>Data Storage and Processing:</strong> A multi-tier data lake architecture was implemented using Azure Data Lake Storage and Azure Databricks provided advanced analytics capabilities.</li>
                <li><strong>Streaming and Machine Learning:</strong> Apache Spark and ml/flow were incorporated for real-time processing and machine learning lifecycle management.</li>
                <li><strong>Serving and Visualization:</strong> Azure Machine Learning, AKS, and Power BI were leveraged for deploying models, scaling services, and data visualization.</li>
                <li><strong>Azure Synapse Analytics:</strong> Utilized for advanced data warehousing and analytics.</li>
              </ul>
              
              <p>Robust data encryption, access controls, and audit trails were implemented throughout the project to ensure data governance, security, and compliance.</p>
              
              <p>The end result was a scalable, highly available, and integrated data analytics platform that empowered our clients to derive actionable insights, enabling informed decision-making and driving business growth.</p>
            `,
          },
          // ...additional content objects if needed
        ],
      },
      {
        title: 'Machine Learning Pipeline on Microsoft Azure',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './Azure_4.jpeg',
        content: [
          {
            type: 'text',
            title: 'Implementing an End-to-End Data Analytics and Machine Learning Pipeline on Microsoft Azure',
            description: `
              <p>In this project, we designed and implemented a comprehensive data analytics and machine learning pipeline leveraging various Azure services. The primary objective was to build a scalable and integrated solution that could ingest data from multiple sources, process and transform it, and serve insights and predictions through advanced analytics and machine learning models.</p>
    
              <p>The architecture encompassed the following key components:</p>
              
              <ul>
                <li><strong>Data Ingestion:</strong>
                  <ul>
                    <li>Azure Data Factory was employed to orchestrate and automate the extraction, transformation, and loading (ETL) processes, facilitating the movement of data into the data lake.</li>
                    <li>Azure Data Lake Storage implemented a multi-tier architecture for efficient data organization and processing.</li>
                  </ul>
                </li>
                <li><strong>Data Processing and Transformation:</strong>
                  <ul>
                    <li>Azure Databricks provided powerful analytics and processing capabilities, as well as machine learning model deployment.</li>
                    <li>Azure Stream Analytics was employed for real-time data stream processing and insights derivation.</li>
                  </ul>
                </li>
                <li><strong>Machine Learning and Serving:</strong>
                  <ul>
                    <li>Azure Machine Learning enabled building, training, and deploying scalable machine learning models.</li>
                    <li>Azure Kubernetes Service (AKS) ensured high availability for containerized models and microservices.</li>
                  </ul>
                </li>
                <li><strong>Data Visualization and Reporting:</strong>
                  <ul>
                    <li>Power BI integrated for interactive dashboards and reporting.</li>
                    <li>Azure Analysis Services provided advanced data modeling and analytics.</li>
                  </ul>
                </li>
              </ul>
    
              <p>Throughout the project, best practices for data governance, security, and compliance were followed, with robust encryption and access controls ensuring data privacy and regulatory compliance. The result was a scalable and secure data analytics and machine learning pipeline, empowering clients to make data-driven decisions and drive innovation.</p>
            `,
          },
          // ...other content types if necessary
        ],
      },
      {
        title: 'Marketing Analytics on Google Cloud',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './GCP_1.jpeg',
        content: [
          {
            type: 'text',
            title: 'Scalable & Efficient Digital Marketing Analytics Platform on GCP',
            description: `
              <p>In this project, we designed and implemented a comprehensive digital marketing analytics platform leveraging various services provided by Google Cloud Platform (GCP). The primary objective was to build a scalable and efficient solution that could ingest and process data from multiple sources, perform advanced analytics, and deliver actionable insights to publishers and advertisers.</p>
              
              <h3>Ingestion Layer:</h3>
              <ul>
                <li><strong>Cloud Dataflow:</strong> Utilized for ingesting and processing data streams in real-time from various sources, such as web applications, mobile apps, and advertising platforms.</li>
                <li><strong>Cloud Pub/Sub:</strong> Employed for reliable and scalable data ingestion, acting as a buffer between data sources and downstream processing components.</li>
                <li><strong>Cloud Dataproc:</strong> Used for batch processing of large datasets from sources like DoubleClick and third-party clusters.</li>
              </ul>
              
              <h3>Processing and Analysis Layer:</h3>
              <ul>
                <li><strong>Cloud Dataproc:</strong> Leveraged for real-time data processing and analysis using Apache Spark.</li>
                <li><strong>BigQuery:</strong> Utilized for querying and analyzing large datasets efficiently.</li>
                <li><strong>Compute Engine:</strong> Employed for running custom data processing workloads and batch jobs.</li>
              </ul>
              
              <h3>Storage Layer:</h3>
              <ul>
                <li><strong>Cloud Storage:</strong> Utilized for storing production data, archival data, and intermediate data processed by various components.</li>
                <li><strong>Cloud Bigtable:</strong> Employed for storing and serving large analytical and operational datasets.</li>
              </ul>
              <h3>Presentation Layer:</h3>
              <ul>
                <li><strong>App Engine:</strong> Utilized for hosting web applications, content management systems (CMS), and e-commerce platforms, enabling seamless integration with the analytics platform.</li>
              </ul>
          
              <p>Throughout the project, we followed best practices for data governance, security, and compliance. Robust data encryption mechanisms were employed to protect sensitive information at rest and in transit. Access controls and audit trails were implemented to ensure data privacy and regulatory compliance.</p>
              
              <p>The end result was a scalable, efficient, and integrated digital marketing analytics platform that empowered our clients to gain valuable insights into their marketing campaigns, user behavior, and audience engagement, enabling data-driven decision-making and optimizing their digital presence.</p>
            `,
          },
          // Additional content sections if needed
        ],
      },
      {
        title: 'Data Integration on Google Cloud',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './GCP_2.jpeg',
        content: [
          {
            type: 'text',
            title: 'Centralized Data Platform for Streamlined Analytics',
            description: `
              <p>In this project, we developed a robust data integration and analytics platform to streamline data flow from various sources into a centralized data warehouse for efficient analysis and reporting. The key components and functionalities are as follows:</p>
              
              <h3>Data Lake:</h3>
              <p>A centralized repository to store raw data from multiple sources, including Client SQL, Customer Data, Supplier Data, Investor Data, and NoSQL databases. This data lake serves as the single source of truth for all data assets within the organization.</p>
              
              <h3>Extract, Transform, Load (ETL) Pipeline:</h3>
              <p>We implemented an Airflow-based ETL pipeline to extract data from the data lake, perform necessary transformations (such as data cleansing, formatting, and enrichment), and load the processed data into the data warehouse.</p>
              
              <h3>Data Warehouse:</h3>
              <p>A scalable and optimized data warehouse solution was set up to store the transformed data in a structured format, enabling efficient querying and analysis.</p>
              
              <h3>Data Analytics and Visualization:</h3>
              <ul>
                <li><strong>Google:</strong> Integrated for data exploration and querying.</li>
                <li><strong>Metabase:</strong> Employed for building interactive visualizations and reports.</li>
                <li><strong>Looker:</strong> Utilized for advanced data modeling and business intelligence capabilities.</li>
              </ul>
              
              <h3>Mixpanel Integration:</h3>
              <p>Mixpanel, a leading product analytics platform, was integrated to capture and analyze user interactions and behaviors within the organization's applications or websites.</p>
              
              <p>The primary objectives of this project were to establish a centralized data platform, streamline data ingestion from disparate sources, enable efficient data transformation and loading processes, and provide powerful analytical capabilities for data-driven decision-making. By consolidating data assets and empowering users with self-service analytics tools, we aimed to drive better insights, optimize operations, and foster a data-driven culture within the organization.</p>
            `,
          },
          // Additional content sections if needed
        ],
      },

      {
        title: 'SDLF Implementation on AWS',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './AWS_1.png',
        content: [
          {
            type: 'text',
            title: 'Enterprise Data Platform with Modern Data Lake Architecture',
            description: `
              <p>This project involved the design and implementation of a comprehensive enterprise data platform leveraging a modern data lake architecture. The key components and functionalities are as follows:</p>
              <p><strong>Data Ingestion:</strong> The platform supports ingestion of data from various sources, including relational databases (Oracle), transactional data (files, SFTP), and real-time data streams (BASE24-eps, BASE24, ERUS Server). Technologies like Historico (for Oracle), Batch (PySpark, Spark), SFTP Transfer, and Kinesis Data Streams were employed to capture and ingest data from these sources.</p>
              <p><strong>Data Lake:</strong> A centralized data lake was established, consisting of three zones: Raw Zone, Standard Zone, and Analytics Zone. The Raw Zone stores unprocessed data in its native format (Amazon S3), while the Standard Zone holds cleansed and transformed data (also in S3). The Analytics Zone (S3) contains data optimized for analytical workloads.</p>
              <p><strong>Streaming Zone:</strong> A separate Streaming Zone was implemented using Amazon Kinesis Data Firehose, enabling real-time data ingestion and processing with low latency (1 min - 15 min, 1 MB - 128 MB).</p>
              <p><strong>Data Processing and Transformation:</strong> The platform leverages various technologies for data processing and transformation, including Glue (Catalog), DynamoDB (Control & Lineage), Elastic Search (Monitoring & Lineage), and Pipeline Operationalization components like Task Management (Argo), Orchestration (Airflow, Lambda), Step Functions, and Glue (Etl).</p>
              <p><strong>Analytics and Visualization:</strong> The processed data is made available for analytical purposes through tools like Redshift (Warehouse), Athena (Query), QuickSight (BI Service), and Real-Time Dashboards. This enables users to perform advanced analytics, create visualizations, and gain insights from the data.</p>
              <p><strong>Data Lab and Advanced Analytics:</strong> A dedicated Data Lab environment is available, featuring a Sandbox Zone (S3), Processing (Lambda), and Exploration (Athena, Query) capabilities. This allows data scientists, ML engineers, and data engineers to explore, experiment, and develop advanced analytical models and solutions.</p>
              <p><strong>DevOps and CI/CD:</strong> The platform incorporates DevOps principles and utilizes tools like CloudFormation, CodePipeline, CodeBuild, CodeCommit, CloudWatch, Jenkins, and GitLab for automation, continuous integration, continuous deployment, and infrastructure as code (IaC) practices.</p>
              <p>The primary objective of this project was to establish a robust, scalable, and secure data platform that integrates seamlessly with various data sources, enables efficient data processing and transformation, and provides advanced analytical capabilities to drive data-driven decision-making across the enterprise.</p>
            `
          }
        ]
      },
      {
        title: 'Serverless Web App on AWS',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './AWS_2.jpeg',
        content: [
          {
            type: 'text',
            title: 'Serverless Web Application with GraphQL API, Cost Monitoring, and Container-based Discovery Service',
            description: `
              <p>This project involved the development of a serverless web application leveraging various AWS services. The key components and functionalities are as follows:</p>
      
              <p><strong>Web UI Component:</strong> The user interface of the application was built using Amazon CloudFront, Amazon S3 (WebUIBucket), Amazon DynamoDB (Settings table), Amazon Cognito (for user authentication), and AWS Lambda (Settings function).</p>
      
              <p><strong>Client API:</strong> The client-side API was implemented using Amazon API Gateway, AWS AppSync (for GraphQL API), and AWS Lambda (functions).</p>
      
              <p><strong>Storage Management:</strong> The application utilized Amazon S3 (AppdataStorageBucket) for storing application data, and AWS Amplify for seamless integration with the storage service.</p>
      
              <p><strong>Cost Component:</strong> To monitor and manage costs, the application employed AWS Lambda (Cost function), Amazon Athena (for querying cost data), Amazon S3 (CURBucket for storing Cost and Usage Reports), and an S3 bucket (AthenaResultsBucket) for storing Athena query results.</p>
      
              <p><strong>Data Component:</strong> The data layer consisted of AWS Lambda (Gremlin function), Amazon Neptune (a graph database), AWS Lambda (Search function), and Amazon OpenSearch Service (successor to Amazon Elasticsearch Service) for efficient data storage and querying.</p>
      
              <p><strong>Discovery Component:</strong> The application included a container-based discovery service, utilizing Amazon Elastic Container Service (ECS), AWS Fargate (for running containerized workloads), Amazon Elastic Container Registry (ECR), and AWS SDK for integration.</p>
      
              <p><strong>Image Deployment:</strong> The container images were stored in an Amazon S3 bucket (DiscoveryBucket) for deployment purposes.</p>
      
              <p><strong>Infrastructure as Code:</strong> The application leveraged AWS CodePipeline for automating the build, test, and deployment processes, and AWS CodeBuild for compiling and packaging the application code.</p>
      
              <p><strong>Networking:</strong> The application utilized an Amazon VPC (Virtual Private Cloud) and a private subnet to secure network communication.</p>
      
              <p>The primary objectives of this project were to create a serverless web application with a GraphQL API for efficient data fetching, implement cost monitoring and reporting mechanisms using AWS services, and integrate a container-based discovery service for advanced functionality. The serverless architecture and the use of managed services provided scalability, reduced operational overhead, and enabled rapid development and deployment cycles.</p>
            `
          }
        ]
      },
      {
        title: 'Machine Learning Pipeline on AWS',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './AWS_3.png',
        content: [
          {
            type: 'text',
            title: 'Machine Learning Pipeline for Model Training, Inference, and Monitoring',
            description: `
              <p>This project involved the implementation of a comprehensive machine learning pipeline leveraging AWS services for model training, inference, and monitoring. The key components and functionalities are as follows:</p>
      
              <p><strong>Model Development Pipeline:</strong> The model development pipeline consisted of several stages, including Data Preprocessing, Training, Preprocessing for Validation, Training Validation, and Model Deployment. This pipeline was responsible for processing the training data, executing model training algorithms, validating the trained model, and deploying the validated model for production use.</p>
      
              <p><strong>Inference Pipeline:</strong> The inference pipeline was designed to handle real-time inference requests. It included stages for Data Preprocessing, Batch Preprocessing, Inference Batch Scoring, Batch Scoring, and Scoring Result Processing. This pipeline ensured that incoming data was preprocessed, scored against the deployed model, and the results were processed and stored for further analysis or consumption.</p>
      
              <p><strong>Inference State Machine:</strong> An AWS State Machine was utilized to manage the end-to-end inference process, orchestrating the various stages of the inference pipeline.</p>
      
              <p><strong>Monitoring:</strong> The pipeline incorporated monitoring capabilities to track model performance and detect potential drift or degradation. This included components for Batch Scoring, Drift Monitoring, and Trigger events for retraining or model updates.</p>
      
              <p><strong>Infrastructure:</strong> The project leveraged various AWS services, including AWS Lambda for executing serverless functions, AWS SageMaker for model training and deployment, AWS Step Functions for orchestrating the state machines, and AWS S3 for data storage. Other services like AWS IAM (Identity and Access Management) and AWS CloudTrail were likely used for access control and auditing purposes.</p>
      
              <p>The primary objective of this project was to establish a robust and scalable machine learning pipeline that automated the entire lifecycle of model training, validation, deployment, inference, and monitoring. By leveraging AWS's managed services and serverless architecture, the pipeline aimed to streamline the development and operationalization of machine learning models, enabling efficient model updates and ensuring reliable model performance over time.</p>
            `
          }
        ]
      }
      ,

      {
        title: 'Data Integration using Snowflake on AWS',
        category: 'Cloud Solutions',
        categories: ['DATA'],
        image: './AWS_4.jpeg',
        content: [
          {
            type: 'text',
            title: 'Enterprise Data Integration and Analytics Platform for Snowflake',
            description: `
              <p>This project involved the implementation of an enterprise data integration and analytics platform leveraging AWS services and the Snowflake cloud data platform. The key components and functionalities are as follows:</p>
              <p><strong>Data Sources:</strong> The platform supports ingestion of data from various sources, including Amazon Kinesis Data Streams (for real-time data), Amazon S3 (for batch data), and Amazon RDS (for relational databases).</p>
              <p><strong>Data Processing and Transformation:</strong> AWS Lambda functions were deployed to process and transform data from the sources. AWS Glue was utilized for data cataloging, ETL (Extract, Transform, Load) jobs, and data movement. AWS Glue Connectors were employed for seamless integration with Snowflake and other data sources.</p>
              <p><strong>Data Lake:</strong> Amazon S3 was used as a data lake to store raw and processed data.</p>
              <p><strong>Data Integration with Snowflake:</strong> The processed data from the AWS ecosystem was loaded into the Snowflake cloud data platform using Snowflake's COPY command or AWS Glue Connectors. Snowflake served as the central repository for integrated data from various sources.</p>
              <p><strong>Data Analytics and Visualization:</strong> Snowflake provided powerful analytics capabilities, allowing users to run SQL queries, create reports, and perform advanced analytics on the integrated data. Tools like AWS QuickSight and Tableau were likely integrated for data visualization and business intelligence (BI) purposes.</p>
              <p><strong>Data Governance and Security:</strong> The platform implemented robust data governance and security measures, utilizing AWS VPC (Virtual Private Cloud), AWS PrivateLink (for secure connectivity), and AWS Identity and Access Management (IAM) for access control and permissions management.</p>
              <p><strong>Collaboration and Workflow:</strong> The platform facilitated collaboration among team members, including ML Data Engineers, Analytics Engineers, Data Scientists, and Business Analysts. Workflows were likely established to streamline the data integration, transformation, and analysis processes.</p>
              <p>The primary objective of this project was to establish a scalable and secure data integration and analytics platform that leveraged the power of AWS services and Snowflake's cloud data platform. By integrating data from various sources, the platform aimed to provide a centralized repository for data analysis, enabling data-driven decision-making and facilitating collaboration among cross-functional teams within the organization.</p>
            `
          }
        ]
      }
      ,
      {
        title: 'Churn Prediction and Retention Analysis',
        category: 'ML & DS Solutions',
        categories: ['MLDS'],
        image: './AWS_5.png',
        content: [
          {
            type: 'text',
            title: 'Churn Prediction and  Retention on AWS',
            description: `
            <p>In this project,We developed a churn prediction and retention system for a telecom company using AWS cloud services. The goal was to leverage machine learning to predict subscriber churn and implement targeted retention strategies.</p>
            <p>We collected telecom data, including call data records (CDRs), billing information, and customer care interactions, and stored it in an Amazon Simple Storage Service (Amazon S3) bucket.We then trained a churn prediction model on this labeled dataset using Amazon SageMaker. After testing and tuning the model,We deployed it as a hosted endpoint using SageMaker.</p>
            <p>For each churn inference event,We utilized Amazon SageMaker Clarify to identify the key features contributing to the model's churn likelihood prediction.We exported the churn model predictions and explainability reports to another Amazon S3 bucket using an AWS Lambda function.</p>
            <p>We used Amazon QuickSight to visualize the model and explainability data, enabling interactive analysis and identification of churn patterns and trends. This analysis helped inform decisions on which subscribers should receive retention offers. Amazon Athena was employed by Amazon QuickSight to access the data in the S3 bucket.</p>
            <p>As a telecom analyst,We analyzed insights from the churn prediction dashboard and used Amazon Pinpoint to send out subscriber retention offers. Additionally, telecom applications could incorporate near real-time churn prediction by directly calling the Amazon SageMaker hosting endpoint.</p>
            <p>This project demonstrated the integration of various AWS services for data ingestion, machine learning model training and deployment, model explainability, data visualization, and customer engagement. It showcased the application of machine learning to predict customer churn and enable targeted retention strategies in the telecom industry.</p>
          
            `
          }
        ]
      }
      ,
    {
      image: './Reader_AI_1.png',
      title: 'Reader AI',
      category: 'AI Products',
      categories: ['AI'],
      galleryImages: ['./Reader_AI_1.png', './Reader_AI_2.png'],
    },
    {
      image: './Kepler_1.png',
      title: 'Kepler AI',
      category: 'AI Products',
      categories: ['AI'],
      galleryImages: ['./Kepler_1.png', './Kepler_2.png', './Kepler_3.png'],
    },
    {
      image: './Chinese_1.png',
      title: 'Restaurant Website',
      category: 'Web Development',
      categories: ['WEB'],
      galleryImages: ['./Chinese_1.png', './Chinese_2.png', './Chinese_3.png', './Chinese_4.png', './Chinese_5.png', './Chinese_6.png', './Chinese_7.png', './Chinese_8.png'],
    },
    {
      image: './Laundry_22.jpeg', // Add a new image for the new project
      title: 'Laundry Website',
      category: 'Web Development',
      categories: ['WEB'],
      galleryImages: ['./Laundry_22.jpeg','./Laundry_1.jpeg', './Laundry_2.jpeg', './Laundry_3.jpeg', './Laundry_4.jpeg', './Laundry_5.jpeg', './Laundry_6.jpeg', './Laundry_7.jpeg', './Laundry_8.jpeg', './Laundry_9.jpeg', './Laundry_10.jpeg', './Laundry_11.jpeg', './Laundry_12.jpeg', './Laundry_13.jpeg', './Laundry_14.jpeg', './Laundry_15.jpeg', './Laundry_16.jpeg', './Laundry_17.jpeg', './Laundry_18.jpeg', './Laundry_19.jpeg', './Laundry_20.jpeg', './Laundry_21.jpeg'],
    },
    {
      image: './Admin_1.png', // Add a new image for the new project
      title: 'Admin Dashboard',
      category: 'Web Development',
      categories: ['WEB'],
      galleryImages: ['./Admin_1.png', './Admin_2.png', './Admin_3.png', './Admin_4.png', './Admin_5.png', './Admin_6.png', './Admin_7.png'],
    },
    {
      image: './App_0.jpeg',
      title: 'Laundry App',
      category: 'Mobile App',
      categories: ['APP'],
      galleryImages: [
        './App_02.jpeg',
        './App_01.jpeg'
      ],
    },
  ];
  return (
      <div className="App">
        <header className="header_area header_v1 transparent_header">
      <div className="container">
        <div className="site_menu">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="brand">
                <Link to="/" className="logo">
                  <img  src='/logo_1.png' className="img-fluid" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10">
        <div className="primary_menu" id="menu">
          <nav className="main_menu">
            <ul>
            <li className={`menu-item ${activeSection === 'deneb_banner' ? 'active_link' : ''}`}>
            <a onClick={() => scrollToSection('deneb_banner')}>Home</a>
          </li>
          <li className={`menu-item ${activeSection === 'deneb_about' ? 'active_link' : ''}`}>
            <a onClick={() => scrollToSection('deneb_about')}>About Us</a>
          </li>
          <li className={`menu-item ${activeSection === 'deneb_service' ? 'active_link' : ''}`}>
            <a onClick={() => scrollToSection('deneb_service')}>Services</a>
          </li>
          <li className={`menu-item ${activeSection === 'deneb_project' ? 'active_link' : ''}`}>
            <a onClick={() => scrollToSection('deneb_project')}>Portfolio</a>
          </li>
          <li className={`menu-item ${activeSection === 'deneb_contact' ? 'active_link' : ''}`}>
            <a onClick={() => scrollToSection('deneb_contact')}>Contact Us</a>
          </li>
            </ul>
          </nav>
        </div>
      </div>
          </div>
        </div>
        <div className="mobile_wrapper">
          <div className="mobile_header">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="brand_logo">
                  <Link to="/">
                    <img src='/logo_1.png' className="img-fluid" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Sidenav Menu (Mobile view) */}
          {/* ... You can implement similar structure for mobile navigation ... */}
        </div>
      </div>
    </header>

        <section id="deneb_banner" className="deneb_banner banner_v1">
          <div className="container">
            <div className="hero_slider">
              <div className="signle_slider">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="banner_content wow fadeInLeft">
                      <h1>We Are <br /><span>InfinitiAI Solutions</span></h1>
                      <h5>We Provide Professional IT Solutions</h5>
                      <p>At InfinitiAI Solutions, we pride ourselves on delivering innovative and professional IT solutions.</p>
                      <p>Our team of experts is dedicated to providing tailor-made services that meet the unique needs of each client.</p>
                      <p>With a focus on excellence and a commitment to staying at the forefront of technology, we ensure that your IT challenges are solved efficiently and effectively.</p>

                      <div className="button_box">
                      <button className="deneb_btn" onClick={() => scrollToSection('deneb_contact')}>Contact Us</button>
                    </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="deneb_img_box wow fadeInRight">
                      <img src='/banner_1.png' className="img-fluid" alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="deneb_service" className="deneb_service service_v1">
      {/* <div className="shape_v2">
        <img src='./shape_7.png' className="shape_7" alt="" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center">
              <h2>Our Service</h2>
              <p>We specialize in delivering top-notch IT solutions to clients across the globe. Our team of skilled professionals is dedicated to providing a wide range of services tailored to meet the unique needs of your business. Our commitment to quality and innovation ensures that we deliver results that exceed expectations.</p>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="grid_item wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <div className="icon">
                <img src='./icon_1.png' className="img-fluid" alt="" />
              </div>
              <div className="info">
                <h4><a href="#">AI Solutions</a></h4>
                <p>Leveraging the power of Large Language Models (LLM) and OpenAI to create innovative AI products. Our offerings include chatbots, Q/A platforms, database and data analysis agents, and  much more, all designed to enhance your business operations and customer interactions. Trust us to deliver AI solutions that drive efficiency and provide actionable insights , this will help you scale your business.</p>
                {/* <a href="#" className="link_btn">Read More</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="grid_item wow fadeInUp" data-wow-delay=".1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
              <div className="icon">
                <img src='./icon_2.png' className="img-fluid" alt="" />
              </div>
              <div className="info">
                <h4><a href="#">Cloud Services</a></h4>
                <p>We offer comprehensive cloud solutions that cater to the evolving needs of modern businesses on different clouds like AWS , Google Cloud and Azure. Our data engineers excel in constructing robust data lakes across various cloud platforms, facilitating scalable and secure data storage solutions. We specialize in orchestrating end-to-end ETL processes to streamline your data flow.</p>
                {/* <a href="#" className="link_btn">Read More</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="grid_item wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
              <div className="icon">
                <img src='./icon_3.png' className="img-fluid" alt="" />
              </div>
              <div className="info">
                <h4><a href="#">Web Design</a></h4>
                <p>Specialized in creating bespoke websites that cater to a diverse range of industries, including restaurants, laundry delivery, real estate, and more. We are equipped with latest technologies to build visually appealing and user-friendly websites that drive engagement and business growth. Whether you need a simple landing page or a complex e-commerce platform, we deliver better than your expectations.</p>
                {/* <a href="#" className="link_btn">Read More</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="grid_item wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
            <div className="icon">
              <img src='./icon_15.png' className="img-fluid" alt="Machine Learning and Data Science" />
            </div>
            <div className="info">
              <h4><a href="#">ML & Data Insights</a></h4>
              <p>At the heart of innovation, our Machine Learning and Data Science expertise empowers businesses to unlock predictive insights and make data-driven decisions. Our team excels in building sophisticated algorithms and data models tailored to industry-specific needs, from predictive maintenance in manufacturing to customer segmentation in retail and much more. </p>
              {/* <a href="#" className="link_btn">Read More</a> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

        <section className="deneb_about about_v1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="deneb_img_box wow fadeInLeft">
                  <img src='./about.png' className="img-fluid" alt="about" />
                </div>
              </div>
              <div className="col-lg-7">
              <div className="deneb_content_box wow fadeInRight">
                <h2>Why You Hire Us?</h2>
                <ul>
                  <li>Our team is well-versed in a range of technologies, from AI and data engineering to web development and digital marketing. We have the skills to tackle any challenge.</li>
                  <li> We understand that every business is unique. That's why we tailor our services to meet your specific needs and goals.</li>
                  <li>With clients around the world, we have a proven track record of delivering successful projects across various industries and domains.</li>
                  <li>We are dedicated to providing top-notch solutions that not only meet but exceed your expectations. Our focus on quality ensures that you get the best results.</li>
                  <li>We stay ahead of the curve by leveraging the latest technologies and innovative strategies to drive your business forward.</li>
                </ul>
                <p>Choose InfinitiAI as your partner, and let us help you achieve your business objectives with our comprehensive IT solutions.</p>
              </div>
            </div>
              </div>
            </div>
          
          </section>

          <section className="deneb_achivement section_padding">
     <div className="container">
       <div className="row align-items-center">
         <div className="col-lg-6 wow fadeInLeft">
           <div className="section_title">
             <h2>Over 500+ Completed work &amp; Still Counting</h2>
           </div>
           <div className="deneb_content_box">
           <p>Pride and precision define our track record at InfinitiAI. With over 500 projects completed, we celebrate a milestone that reflects our commitment to excellence and client satisfaction.</p>
          <p>Our journey has been marked by diverse challenges and innovative solutions, catering to a vast spectrum of industries. Each completed project is a story of collaboration, expertise, and a relentless pursuit of perfection.</p>
          <p>As we continue to grow, our focus remains on delivering exceptional results that speak louder than numbers. Join us, and let's build success stories together.</p>

           </div>
         </div>
         <div className="col-lg-6">
           <div className="achivment_wrapper">
             <div className="single_achivment wow fadeInUp">
               <div className="icon">
                 <img src="./icon_7.png" className="img-fluid" alt="" />
               </div>
               <h3>45+</h3>
               <p>Projects Done</p>
             </div>
             <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
               <div className="icon">
                 <img src="./icon_8.png" className="img-fluid" alt="" />
               </div>
               <h3>40+</h3>
               <p>Cup Of Coffee's</p>
             </div>
             <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
               <div className="icon">
                 <img src="./icon_9.png" className="img-fluid" alt="" />
               </div>
               <h3>16+</h3>
               <p>Active Projects</p>
             </div>
             <div className="single_achivment wow fadeInUp" data-wow-delay=".3s">
               <div className="icon">
                 <img src="./icon_10.png" className="img-fluid" alt="" />
               </div>
               <h3>5+</h3>
               <p>Years Exerience</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>

   <section id="deneb_project" className="deneb_project project_v1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center">
              <h2>Our Latest Projects</h2>
              <p>Showcasing innovation and expertise through our recently completed projects – each a testament to our commitment to excellence and client success</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="project_button text-center">
              {projectCategories.map((category) => (
                <button
                  key={category.name}
                  className={`project_btn ${filter === category.filter ? 'active_btn' : ''}`}
                  onClick={() => setFilter(category.filter)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {projects
            .filter((project) =>
              filter === '*' ? project : project.categories.some((category) => category.includes(filter.substring(1)))
            )
            .map((project, index) => (
              <div key={index} className={`col-md-4 single_project ${project.categories.join(' ')}`}>
                <div className="grid_item">
                  <div className="deneb_img">
                    <img src={project.image} className="img-fluid" alt="" />
                  </div>
                  <div className="deneb_info">
                    <h4>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setShowGallery(true);
                      setSelectedProject(project.galleryImages ? { content: project.galleryImages.map(src => ({ type: 'image', src })) } : project);
                    }}>
                      {project.title}
                    </a>
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {showGallery && (
        <div className="project-gallery-overlay">
          <div className="project-gallery-container">
            <button
              className="close-btn"
              onClick={() => setShowGallery(false)}
            >
              X
            </button>
            <ProjectGallery content={selectedProject.content} /> {/* Pass the content array */}
          </div>
        </div>
      )}
      </div>
    </section>

        <section className="deneb_testimonial testimonial_v1">
     <div className="shape_v5">
       <img src="./shape_12.png" className="shape_12" alt="" />
       <img src="./shape_13.png" className="shape_13" alt="" />
     </div>
     <div className="container">
       <div className="row">
         <div className="col-lg-12">
           <div className="section_title text-center">
             <h2>What People Say</h2>
             <p>Hear from our satisfied clients who share their experiences and the impactful results delivered by our dedicated team</p>
           </div>
         </div>
       </div>
       <div className="row1">
         <div className="single_img">
           <img src="./1.png" className="img-fluid" alt="" />
         </div>
         <div className="single_img sm_img">
           <img src="./2.png" className="img-fluid" alt="" />
         </div>
         <div className="single_img sm_img">
           <img src="./3.png" className="img-fluid" alt="" />
         </div>
       </div>
       <div className="row2">
         <div className="single_img">
           <img src="./4.png" className="img-fluid" alt="" />
         </div>
         <div className="single_img sm_img">
           <img src="./5.png" className="img-fluid" alt="" />
         </div>
         <div className="single_img sm_img">
           <img src="./6.png" className="img-fluid" alt="" />
         </div>
         <div className="single_img">
           <img src="./7.png" className="img-fluid" alt="" />
         </div>
       </div>
       <Slider {...settings}>
         {testimonials.map((testimonial, index) => (
           <div className="single_testimonial" key={index}>
             <div className="client_img">
              <div className="qoute">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <img src={testimonial.image} className="img-fluid" alt="" />
              <div className="qoute">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
            </div>
             <div className="client_info">
               <h3>{testimonial.name}</h3>
               <h5>{testimonial.title}</h5>
               <p>{testimonial.description}</p>
             </div>
           </div>
         ))}
       </Slider>
     </div>
   </section>

   <section id='deneb_about' className="deneb_about_us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
          <div className="section_title">
          <h2>Our Story</h2>
          <p>Born amidst the unprecedented challenges of a global pandemic, InfinitiAI stands as a testament to resilience and innovation. In a time when the world shifted towards the digital realm, our company was conceived to help bridge the gap between technology and everyday business needs.</p>
          <p>The early years were a crucible, shaping and forging our team in the fires of rapid change and uncertainty. We struggled, like many, to navigate the tumultuous economic waters but found strength in our unity and purpose. Our commitment to providing outstanding IT solutions became the beacon that guided us through the storm.</p>
          <p>Today, InfinitiAI has emerged as a paragon of adaptability and forward-thinking. Our journey, marked by relentless dedication and a series of successful projects, narrates not just our growth but the evolution of our clients who have thrived with our digital solutions.</p>
          <p>As we continue to expand our horizons, we remain dedicated to the ideals that were our founding pillars - unwavering quality, innovative solutions, and genuine customer care. Join us as we stride into the future, creating a world where technology empowers and transforms businesses for the better.</p>
        </div>
          </div>
          <div className="col-lg-5">
            <div className="deneb_img_box">
              <img src="https://i.ibb.co/2kX98mw/skill.png" className="img-fluid" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>

        

        <section className="deneb_blog blog_v1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text-center">
                  <h2>Latest Blog</h2>
                  <p>Dive into our latest insights, where we explore the trends, techniques, and technologies shaping the future of the IT landscape.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="grid_item wow fadeInUp">
                  <div className="deneb_img">
                    <img src='https://as2.ftcdn.net/v2/jpg/02/83/46/33/1000_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg' className="img-fluid" alt="blog" />
                  </div>
                  <div className="deneb_info">
                    <Link to="#" className="date">7 March, 2024</Link>
                    <h3><Link to="webdev-trends.html">The Next Wave of Web Development</Link></h3>
                  <p>Unveiling the latest trends in web development, from responsive design to progressive web applications, tailored for sectors like real estate and e-commerce.</p>
                  <Link to="#" className="link_btn">Read More</Link>
                  </div>
                  </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="grid_item wow fadeInUp" data-wow-delay=".2s">
                  <div className="deneb_img">
                  <img src='https://powerslides.com/wp-content/uploads/2019/02/Data-Lake-Architecture-3.jpg' className="img-fluid" alt="blog" />
                  </div>
                  <div className="deneb_info">
                  <Link to="#" className="date">7 March, 2024</Link>
                  <h3><Link to="data-engineering-cloud.html">Building Data Lakes for Tomorrow's Needs</Link></h3>
                  <p>Learn about the strategic advantages of constructing scalable data lakes on the cloud and how end-to-end ETL processes are transforming business analytics.</p>
                  <Link to="#" className="link_btn">Read More</Link>
                  </div>
                  </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="grid_item wow fadeInUp" data-wow-delay=".3s">
                  <div className="deneb_img">
                  <img src='https://media.istockphoto.com/id/1765238469/photo/ai-ethics-or-ai-law-concept-bias-in-machine-learning-algorithms-developing-ai-codes-of-ethics.jpg?s=2048x2048&w=is&k=20&c=VtrMYiIIpP5MCpO26TIKG-g6BMh5dPzr9A6K10N_-DE=' className="img-fluid" alt="blog" />
                  </div>
                  <div className="deneb_info">
                  <Link to="#" className="date">7 March, 2024</Link>
                  <h3><Link to="ai-innovations.html">AI and the Future of Customer Service</Link></h3>
                  <p>Discover how AI-driven chatbots and Q/A platforms are revolutionizing customer interactions, offering personalized support and real-time engagement.</p>

                  <Link to="#" className="link_btn">Read More</Link>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </section>
    <section id="deneb_contact" className="deneb_contact contact_v1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="deneb_img_box">
              <img src='./contact.png' className="img-fluid" alt="contact" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section_title">
              <h2>Get In Touch With Us</h2>
              <p>When unknow printer took a gallery of type and scramblted it to make a type specimen book</p>
            </div>
            <div className="contact_form">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input type="text" className="form_control" placeholder="First Name" name="name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input type="text" className="form_control" placeholder="Last Name" name="name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form_group">
                      <input type="text" className="form_control" placeholder="Phone No." name="phone" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form_group">
                      <textarea className="form_control" placeholder="Message" name="message"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="button_box">
                      <button className="deneb_btn">Submit Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="deneb_cta">
      <div className="container">
        <div className="cta_wrapper">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_content">
                <h3>Have Any Project in Mind ?</h3>
                <p>Bring your vision to life with us. Whether it's a spark of inspiration or a strategic business initiative, our doors are open to your ideas. </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="button_box">
                <div className="deneb_btn" onClick={() => scrollToSection('deneb_contact')}>Hire Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="deneb_footer">
    <div className="widget_wrapper" style={{ backgroundImage: "url(./footer_bg.png)" }}>
     <div className="container">
       <div className="row">
         <div className="col-lg-4 col-md-6 col-12">
           <div className="widget widegt_about">
             <div className="widget_title">
               <img src="./logo_1.png" className="img-fluid" alt="" />
             </div>
             <p>
              
             At InfinitiAI Solutions, we pride ourselves on delivering innovative and professional IT solutions. Our team of experts is dedicated to providing tailor-made services that meet the unique needs of each client
             </p>
             <ul className="social">
               <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
               <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
               <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
             </ul>
           </div>
         </div>
         <div className="col-lg-4 col-md-6 col-sm-12">
           <div className="widget widget_link">
             <div className="widget_title">
               <h4>Links</h4>
             </div>
             <ul>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Portfolio</a></li>
               <li><a href="#">Blog</a></li>
             </ul>
           </div>
         </div>
         <div className="col-lg-4 col-md-6 col-sm-12">
           <div className="widget widget_contact">
             <div className="widget_title">
               <h4>Contact Us</h4>
             </div>
             <div className="contact_info" style={{ marginLeft: '100px' }}>
               <div className="single_info">
                 <div className="icon">
                   <FontAwesomeIcon icon={faPhoneAlt} />
                 </div>
                 <div className="info">
                   <p><a href="tel:+918777061431">+91 9051-37-6351</a></p>
                   <p><a href="tel:+918777061431">+91 9051-37-6351</a></p>
                 </div>
               </div>
               <div className="single_info">
                 <div className="icon">
                   <FontAwesomeIcon icon={faEnvelope} />
                 </div>
                 <div className="info">
                   <p><a href="mailto:liamelzer44@gmail.com">liamelzer44@gmail.com</a></p>
                   <p><a href="mailto:sohamdev@gmail.com">lilybiso@gmail.com</a></p>
                 </div>
               </div>
               <div className="single_info">
                 <div className="icon">
                   <FontAwesomeIcon icon={faMapMarkerAlt} />
                 </div>
                 <div className="info">
                   <p>Patuli, Kolkata , India</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
      <div className="copyright_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright_text">
                <p>Copyright &copy; 2024 <span>Infinit AI</span>. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
}

export default App;

