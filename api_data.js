define({
  "api": [{
      "type": "POST",
      "url": "/authenticate",
      "title": "Authenticate",
      "name": "Authenticate",
      "group": "Auth",
      "parameter": {
        "fields": {
          "Parameter": [{
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "mobile",
              "description": "<p>11 digits mobile number</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>otp code sent</p>"
            }
          ]
        },
        "examples": [{
            "title": "Success-Response",
            "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"otp code sent\"\n}",
            "type": "json"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 422": [{
            "group": "Error 422",
            "optional": false,
            "field": "error",
            "description": "<p>validation error</p>"
          }]
        },
        "examples": [{
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Validation Error\n{\n  \"error\": \"validation error\",\n  \"message\": \"error message\" \n}",
          "type": "json"
        }]
      },
      "version": "1.0.0",
      "groupTitle": "Authentication"
    },
    {
      "type": "POST",
      "url": "/authenticate/confirm",
      "title": "Confirm authenticate",
      "name": "Confirm",
      "group": "Auth",
      "parameter": {
        "fields": {
          "Parameter": [{
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "mobile",
              "description": "<p>11 digits mobile number</p>"
            },
            {
              "group": "Parameter",
              "type": "Number",
              "optional": false,
              "field": "otp_code",
              "description": "<p>4 digits otp code</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "user",
              "description": "<p>authenticated user</p>"
            }
          ]
        },
        "examples": [{
            "title": "Success-Response",
            "content": "HTTP/1.1 200 OK\n{\n  \"user\": {}\n}",
            "type": "json"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 422": [{
            "group": "Error 422",
            "optional": false,
            "field": "error",
            "description": "<p>validation error</p>"
          }]
        },
        "examples": [{
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Validation Error\n{\n  \"error\": \"validation error\",\n  \"message\": \"error message\" \n}",
          "type": "json"
        }]
      },
      "version": "1.0.0",
      "groupTitle": "Authentication"
    },
    {
      "type": "GET",
      "url": "/authenticate/user",
      "title": "Get authenticated user info",
      "name": "User",
      "group": "Auth",
      "header": {
        "fields": {
          "Header": [
            {
              "group": "Header",
              "type": "String",
              "optional": false,
              "field": "Authorization",
              "description": "<p>Bearer {token}</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>user object</p>"
          }]
        },
        "examples": [{
          "title": "Success-Response (if you sent mobile and otp_code parameter):",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {}\n}",
          "type": "json"
        }]
      },
      "error": {
        "fields": {
          "Error 422": [{
            "group": "Error 422",
            "optional": false,
            "field": "error",
            "description": "<p>validation error</p>"
          }]
        },
        "examples": [{
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Validation Error\n{\n  \"error\": \"validation error\",\n  \"message\": \"error message\" \n}",
          "type": "json"
        }]
      },
      "version": "1.0.0",
      "groupTitle": "Authentication"
    }
  ]
});