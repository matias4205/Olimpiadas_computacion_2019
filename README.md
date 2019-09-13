# Olimpiadas_computacion_2019
Este es un proyecto de prueba para las olimpiadas de computación de la ET.36

Recordar descargar este archivo https://github.com/ColorlibHQ/AdminLTE/archive/v2.4.17.zip y guardarlo bajo el nombre por defecto en frontend/public/*defalutName*

# API Reference
## Auth
* Log-in with user account:
    * ``` POST | /api/auth/sign-in ```
    * Request Body:
    * ``` 
        # You need to send a post using the basic authentication method sending:
    
        - username: It can be an username or an email
        - password: Here you send the form password
        ```

* Register a productor:
    * ``` POST | /api/auth/sign-up ```
    * Request Body:
    * ```
        {
            user: {	
                "firstName": "",
                "lastName": "",
                "role": "administrator",
                "email": "",
                "password": ""
            },
            productor: {
                "comercialDenomination": "",
                "ownerCompany": "",
                "fiscalCode": "",
                "address": ""
            }
        }
        ```
----
## Sections
* Get all the productor sections and units:
    * ``` GET | /api/sections ```
    * Request Body: **None**

* Create a new section:
    * ``` POST | /api/sections ```
    * Request Body:
    * ```
        {
            "sectionName": "",
            "description": ""
        }
        ```

* Edit a section:
    * ``` PUT | /api/sections/:sectionId ```
    * Request Body:
    * ```
        {
            "description": ""
        }
        ```

* Delete a section:
    * ``` DELETE | /api/sections/:sectionId ```
    * Request Body: **None**

* Create a section unit:
    * ``` POST | /api/sections/unit ```
    * Request Body:
    * ```
        {
            "sectionName": "",
            "unit": {
                "unitName": "",
                "description": ""
            }
        }
        ```

* Edit a section unit:
    * ``` PUT | /api/sections/unit ```
    * Request Body:
    * ```
        {
            "sectionName": "",
            "unit": {
                "unitName": "",
                "description": ""
            }
        }
        ```

* Delete a section unit:
    * ``` DELETE | /api/sections/unit ```
    * Request Body:
    * ```
        {
            "sectionName": "",
            "unitName": ""
        }
        ```
---
## Users
* Get all the productor users:
    * ``` GET | /api/users ```
    * Request Body: **None**

* Get a user's data:
    * ``` GET | /api/users/:userId ```
    * Request Body: **None**

* Create a user:
    * ``` POST | /api/users ```
    * Request Body:
    * ```
        {
            "firstName": "",
            "lastName": "",
            "role": "",
            "email": "",
            "password": ""
        }
        ```

* Edit a user:
    * ``` PUT | /api/users/:userId ```
    * Request Body:
    * ```
        {
            "firstName": "",
            "lastName": "",
            "role": "",
            "scopes": [ "" ],
            "email": ""
        }
        ```
    * ***All the keys of this request are optional, and only the keys that were sent, are the ones to be updated***

* Delete a user:
    * ``` DELETE | /api/users/:userId ```
    * Request Body: **None**

* Get a user's activity:
    * ``` GET | /api/users/:userId/activity ```
    * Request Body: **None**
----
## Productor
* Get the user's productor's data:
    * ``` GET | /api/productor ```
    * Request Body: **None**

* Create a productor:
    * ``` POST | /api/productor ```
    * Request Body:
    * ```
        {
            "comercialDenomination": "",
            "ownerCompany": "",
            "fiscalCode": "",
            "address": ""
        }
        ```
----
## Readings
* Get the user's productor's readings of each units:
    * ``` GET | /api/readings ```
    * Request Body: **None**