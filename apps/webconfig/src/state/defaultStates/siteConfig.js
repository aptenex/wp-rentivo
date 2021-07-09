const siteConfig = {
  "id": "website",
  "name": "Website Name",
  "shortName": "website",
  "websiteUrl": "https://website.com",
  "baseUrl": window.apps ? window.apps.base_url : '',
  "dynamicPropertyPages": true,
  "noIndex": true,
  "currency": {
    "defaultCurrency": "USD",
    "supportedCurrencies": ["GBP", "EUR", "USD"]
  },
  "site": {
    "logo": {
      "useImage": true,
      "text": "Website Name",
      "image": {
        "width": 198,
        "height": 48,
        "types": {
          "default": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
          "defaultMobile": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
          "light": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
          "lightMobile": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
          "dark": "http://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-white.svg",
          "darkMobile": "http://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-white.svg"
        }
      }
    },
    "icons": {
      "16": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/fav-3.png",
      "32": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/fav-3.png",
      "48": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/icon-128.png",
      "128": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/icon-128.png"
    },
    "cookies": {
      "active": false,
      "policyUrl": "https://leavetown.com/terms/",
      "position": "center"
    },
    "api": {
      "lycan": {
        "channelId": "120a0ed1-c841-4531-968f-d1d65209ccc0",
        "host": "https://search.es.rentivo.com:9243",
        "sendCurrencyOnPriceRequests": false
      },
      "googleApiKey": "AIzaSyBpUyxFM1ORsk7scdoW54MtLiq1pfFYFMw",
      "tracking": {
        "debug": false,
        "environments": ["production", "development"],
        "googleTagManager": {
          "active": true,
          "autoStart": true,
          "defaultDataLayer": {
            "platform": "rentivo"
          },
          "trackingId": "GTM-M4WLHWN",
          "cookieFlags": "secure;samesite=none"
        },
        "googleAnalytics": {
          "active": true,
          "head": true,
          "trackingId": "UA-34358122-1",
          "autoStart": true,
          "anonymize": true,
          "cookieFlags": "secure;samesite=none"
        },
        "googleAds": {
          "active": false,
          "head": true,
          "trackingId": "YOUR_GOOGLE_ADS_TRACKING_ID",
          "anonymize": true,
          "cookieFlags": "secure;samesite=none"
        },
        "hotjar": {
          "active": false,
          "head": true,
          "trackingId": "YOUR_HOTJAR_ID",
          "snippetVersion": "6"
        },
        "facebookPixel": {
          "active": false,
          "head": true,
          "autoStart": true,
          "trackingId": ""
        }
      },
      "cdn": {
        "provider": "IMAGEKIT",
        "options": {
          "publicKey": "xGRvTtVgg0R+rXlLusIq8Vr/Xmk=",
          "urlEndpoint": "https://ik.imagekit.io/rentivo/core"
        }
      },
      "map": {
        "provider": "MAPBOX",
        "mapKey": "pk.eyJ1IjoiamV0c3RyZWFtdGVjaCIsImEiOiJja21lcGsxZTkwb3llMnJwNTNuN3kyMjMyIn0.oYCIs5zfjXos1xhUgZm-Ng",
        "mapStyle": "mapbox://styles/mapbox/streets-v11"
      }
    },
    "sharing": {
      "ogImage": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/brandhighresexport2-scaled.jpg",
      "twitterImage": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/brandhighresexport2-scaled.jpg"
    },
    "structuredData": {
      "organization": {
        "name": "Leavetown",
        "legalName": "Leavetown",
        "url": "https://leavetown.com",
        "logo": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
        "foundingDate": "2008",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "hello@leavetown.com"
        },
        "sameAs": [

        ]
      },
      "brand": {
        "name": "Leavetown",
        "url": "https://leavetown.com",
        "logo": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
        "sameAs": []
      }
    },
    "content": {
      "variables": {
        "sep": "—",
        "siteTitle": "Leavetown"
      }
    },
    "design": {
      "fonts": {
        "google": [
          {
            "family": "Montserrat",
            "variants": ["500", "600", "700"],
            "fontDisplay": "swap"
          }
        ]
      }
    },
    "formatting": {
      "fullDate": "Do MMM YY"
    },
    "countries": {
      "important": ["GB", "US", "CA", "AU", "MX", "NZ", "BR", "JP", "CN"],
      "include": [],
      "exclude": []
    },
    "cancellationPolicies": {
      "RELAXED": [{
        "daysBeforeArrival": 1,
        "percentageRetained": 0.0
      }],
      "MODERATE": [{
        "daysBeforeArrival": 5,
        "percentageRetained": 0.0
      },
        {
          "daysBeforeArrival": 1,
          "percentageRetained": 50.0
        }
      ],
      "FIRM": [{
        "daysBeforeArrival": 14,
        "percentageRetained": 0.0,
        "graceHours": 48
      },
        {
          "daysBeforeArrival": 7,
          "percentageRetained": 50.0,
          "graceHours": 48
        }
      ],
      "STRICT": [{
        "daysBeforeArrival": 30,
        "percentageRetained": 50.0,
        "graceHours": 48
      }],
      "NO_REFUND": [{
        "daysBeforeArrival": 60,
        "percentageRetained": 50.0,
        "graceHours": 48
      }]

    }
  },
  "search": {
    "results": {
      "perPage": 12,
      "totalHits": 5000,
      "openInNewTab": true,
      "includeDiscounts": false
    },
    "map": {
      "experiences": {
        "include": true,
        "showByDefault": true
      },
      "placeNames": {
        "usePlaceNames": false
      },
      "isOpenOnLoad": true,
      "defaultZoom": 3,
      "maxZoom": 19,
      "minZoom": 1,
      "useFuzzyRadius": false,
      "fuzzyRadius": 200,
      "searchMapOnMoveDefault": true,
      "defaultCenter": {
        "lat": 38.941631,
        "lng": -119.977219
      }
    },
    "filters": {
      "los": {
        "active": true,
        "showFilter": false,
        "urlParam": "los",
        "defaultValue": "no"
      },
      "availability": {
        "active": true,
        "urlParam": "availability",
        "defaultValue": null,
        "showFilter": true,
        "minNights": 1,
        "listensTo": ["los", "guests", "price"]
      },
      "availabilityIn": {
        "active": true,
        "urlParam": "availability_in",
        "defaultValue": null,
        "showFilter": true,
        "listensTo": ["availability"]
      },
      "location": {
        "active": true,
        "urlParam": "location",
        "defaultValue": null,
        "showFilter": true,
        "type": "COLLECTION_CASCADE",
        "bias": {
          "countries": ["IT", "GB", "ES"],
          "types": null,
          "radius": 0
        }
      },
      "bedrooms": {
        "active": true,
        "urlParam": "bedrooms",
        "defaultValue": 0,
        "showFilter": true,
        "min": 0,
        "max": 12,
        "queryFormat": "~"
      },
      "beds": {
        "active": true,
        "urlParam": "beds",
        "defaultValue": 0,
        "showFilter": true,
        "min": 0,
        "max": 24,
        "queryFormat": "~"
      },
      "bathrooms": {
        "active": true,
        "urlParam": "bathrooms",
        "defaultValue": 0,
        "showFilter": true,
        "min": 0,
        "max": 12,
        "queryFormat": "~"
      },
      "guests": {
        "active": true,
        "urlParam": "guests",
        "defaultValue": 0,
        "showFilter": true,
        "min": 0,
        "max": 24,
        "queryFormat": "gte",
        "guestsPicker": true
      },
      "adults": {
        "active": true,
        "urlParam": "adults",
        "defaultValue": 0,
        "showFilter": false,
        "countsToTotal": true,
        "dependsOn": "guests"
      },
      "children": {
        "active": true,
        "urlParam": "children",
        "defaultValue": 0,
        "countsToTotal": true,
        "showFilter": false,
        "dependsOn": "guests"
      },
      "infants": {
        "active": true,
        "urlParam": "infants",
        "defaultValue": 0,
        "countsToTotal": false,
        "showFilter": false,
        "dependsOn": "guests"
      },
      "pets": {
        "active": true,
        "urlParam": "pets",
        "defaultValue": 0,
        "countsToTotal": false,
        "showFilter": true,
        "queryFormat": "gte",
        "useQuery": true
      },
      "price": {
        "active": true,
        "urlParam": "price",
        "defaultValue": [0, 999],
        "showFilter": true,
        "sliderStep": 5,
        "histogramInterval": 50,
        "showHistogram": true,
        "listensTo": ["los"]
      },
      "flags": {
        "active": true,
        "showFilter": true,
        "urlParam": "flags",
        "options": [
          {
            "urlValue": "featured",
            "value": "isFeatured"
          }
        ],
        "defaultValue": []
      },
      "features": {
        "active": true,
        "urlParam": "features",
        "defaultValue": [],
        "showFilter": true,
        "nestedField": "features",
        "field": "features.type.keyword",
        "optionsToShow": 6,
        "options": [
          {
            "urlValue": "hot_tub",
            "value": "SPA_POOL_JACUZZI_HOT_TUB"
          },
          {
            "urlValue": "fireplace",
            "value": "GENERAL_FIREPLACE"
          },
          {
            "urlValue": "wifi",
            "value": "COMMUNICATION_INTERNET|COMMUNICATION_INTERNET_CABLED|COMMUNICATION_INTERNET_DONGLE|COMMUNICATION_INTERNET_HIGHSPEED|COMMUNICATION_INTERNET_WIFI"
          },
          {
            "urlValue": "aircon",
            "value": "GENERAL_AIR_CONDITIONING"
          },
          {
            "urlValue": "pool",
            "value": "SPA_POOL_INDOOR_POOL|SPA_POOL_POOL_COMMUNAL|SPA_POOL_SWIMMING_POOL|SPA_POOL_POOL_HEATED|SPA_POOL_POOL_INDOOR|SPA_POOL_POOL_PRIVATE|SPA_POOL_POOL_UNHEATED"
          },
          {
            "urlValue": "pets",
            "value": "GENERAL_PET_FRIENDLY"
          },
          {
            "urlValue": "kitchen",
            "value": "KITCHEN_KITCHENETTE|KITCHEN_STOVE"
          },
          {
            "urlValue": "fitness",
            "value": "LOCAL_GYM"
          },
          {
            "urlValue": "stove",
            "value": "KITCHEN_STOVE"
          },
          {
            "urlValue": "oven",
            "value": "KITCHEN_OVEN"
          },
          {
            "urlValue": "dryer",
            "value": "GENERAL_TUMBLE_DRYER"
          },
          {
            "urlValue": "washer",
            "value": "GENERAL_WASHING_MACHINE"
          },
          {
            "urlValue": "ironing",
            "value": "GENERAL_IRON_IRONING_BOARD"
          },
          {
            "urlValue": "hair_dryer",
            "value": "GENERAL_HAIRDRYER"
          },
          {
            "urlValue": "parking",
            "value": "GENERAL_PARKING"
          },
          {
            "urlValue": "tv",
            "value": "ENTERTAINMENT_TV|ENTERTAINMENT_CABLE_TV|ENTERTAINMENT_HIGH_DEFINITION_TV|ENTERTAINMENT_SATELLITE_TV|ENTERTAINMENT_STANDARD_DEFINITION_TV"
          },
          {
            "urlValue": "balcony",
            "value": "OUTDOOR_BALCONY"
          },
          {
            "urlValue": "patio_deck",
            "value": "OUTDOOR_DECK_PATIO"
          },
          {
            "urlValue": "dishwasher",
            "value": "KITCHEN_DISHWASHER"
          },
          {
            "urlValue": "microwave",
            "value": "KITCHEN_MICROWAVE"
          },
          {
            "urlValue": "fridge",
            "value": "KITCHEN_FRIDGE_FREEZER|KITCHEN_AMERICAN_FRIDGE|KITCHEN_FRIDGE_STANDALONE"
          },
          {
            "urlValue": "toaster",
            "value": "KITCHEN_TOASTER"
          },
          {
            "urlValue": "coffee_machine",
            "value": "KITCHEN_COFFEE_MACHINE"
          },
          {
            "urlValue": "dishes_utensils",
            "value": "KITCHEN_FULL_CUTLERY_UTENSIL_KIT"
          },
          {
            "urlValue": "bbq",
            "value": "OUTDOOR_BARBECUE"
          },
          {
            "urlValue": "garden",
            "value": "GENERAL_GARDEN"
          },
          {
            "urlValue": "cot",
            "value": "CHILDREN_BABY_COT"
          },
          {
            "urlValue": "games_room",
            "value": "ENTERTAINMENT_GAMES_ROOM"
          },
          {
            "urlValue": "tennis",
            "value": "LOCAL_TENNIS_COURT"
          },
          {
            "urlValue": "water_parks",
            "value": "ATTRACTIONS_WATER_THEME_PARK"
          },
          {
            "urlValue": "private_beach",
            "value": "LOCALITY_BEACH|LOCALITY_BEACH_FRONT|LOCAL_BEACH|LOCAL_BEACH_FRONT"
          },
          {
            "urlValue": "boat_mooring",
            "value": "LOCAL_BOATING"
          },
          {
            "urlValue": "housekeeping",
            "value": "ACCOMMODATIONS_HOUSE_CLEANING_INCLUDED"
          },
          {
            "urlValue": "breakfast",
            "value": "ACCOMMODATIONS_BREAKFAST_INCLUDED_IN_PRICE"
          }
        ]
      },
      "type": {
        "active": true,
        "urlParam": "type",
        "defaultValue": [],
        "showFilter": true,
        "nestedField": null,
        "field": "listing.type.keyword",
        "optionsToShow": 12,
        "options": [
          {
            "urlValue": "cabin_chalet_cottage",
            "value": "LISTING_TYPE_CABIN|LISTING_TYPE_CHALET|LISTING_TYPE_COTTAGE"
          },
          {
            "urlValue": "condo_apartment",
            "value": "LISTING_TYPE_APARTMENT|LISTING_TYPE_CONDO|LISTING_TYPE_STUDIO"
          },
          {
            "urlValue": "hotel",
            "value": "LISTING_TYPE_HOTEL"
          },
          {
            "urlValue": "house",
            "value": "LISTING_TYPE_HOUSE|LISTING_TYPE_VILLA"
          },
          {
            "urlValue": "townhome",
            "value": "LISTING_TYPE_TOWNHOUSE"
          },
          {
            "urlValue": "glamping",
            "value": "LISTING_TYPE_CAMPER_VAN"
          },
          {
            "urlValue": "on_water",
            "value": "LISTING_TYPE_HOUSE_BOAT|LISTING_TYPE_BOAT"
          }
        ]
      },
      "locationFeatures": {
        "active": true,
        "urlParam": "location_features",
        "defaultValue": [],
        "showFilter": true,
        "nestedField": "features",
        "field": "features.type.keyword",
        "optionsToShow": 6,
        "options": [
          {
            "urlValue": "waterfront",
            "value": "LOCALITY_BEACH|LOCALITY_BEACH_FRONT|LOCAL_BEACH|LOCAL_BEACH_FRONT"
          },
          {
            "urlValue": "water_view",
            "value": "LOCALITY_WATER_VIEWS"
          },
          {
            "urlValue": "central",
            "value": "LOCALITY_TOWN_CENTRE"
          },
          {
            "urlValue": "slopeside",
            "value": "LOCALITY_SKI_IN_SKI_OUT|LOCAL_SKIING"
          },
          {
            "urlValue": "golf",
            "value": "LOCAL_GOLF|LOCALITY_GOLF_COURSE"
          },
          {
            "urlValue": "250m_ski",
            "value": "LOCAL_SKIING|LOCAL_SNOW_BOARDING"
          }
        ]
      },
      "suitability": {
        "active": true,
        "urlParam": "suitability",
        "defaultValue": [],
        "nestedField": "features",
        "field": "features.type.keyword",
        "showFilter": true,
        "optionsToShow": 6,
        "options": [
          {
            "urlValue": "disabled_access",
            "value": "SUITABILITY_ACCESSIBILITY_WHEELCHAIR_GREAT"
          },
          {
            "urlValue": "elevator",
            "value": "GENERAL_LIFT_ELEVATOR"
          },
          {
            "urlValue": "smoking",
            "value": "SUITABILITY_SMOKING_ALLOWED"
          }
        ]
      },
      "relax": {
        "active": true,
        "urlParam": "relax_features",
        "defaultValue": [],
        "showFilter": true,
        "nestedField": "features",
        "field": "features.type.keyword",
        "optionsToShow": 6,
        "options": [
          {
            "urlValue": "sauna",
            "value": "SPA_POOL_SAUNA"
          },
          {
            "urlValue": "spa",
            "value": "SPA_POOL_HEALTH_FACILITIES"
          },
          {
            "urlValue": "bathtub",
            "value": "GENERAL_BATHTUB"
          }
        ]
      },
      "safety": {
        "active": true,
        "urlParam": "safety_features",
        "defaultValue": [],
        "showFilter": true,
        "nestedField": "safety",
        "field": "safety.type.keyword",
        "optionsToShow": 6,
        "options": [
          {
            "urlValue": "smoke_detector",
            "value": "SAFETY_SMOKE_DETECTOR"
          },
          {
            "urlValue": "carbon_monoxide_detector",
            "value": "SAFETY_CARBON_MONOXIDE_DETECTOR"
          }
        ]
      },
      "keyword": {
        "active": true,
        "urlParam": "keyword",
        "defaultValue": null,
        "showFilter": true
      },
      "sort": {
        "active": true,
        "urlParam": "sort_by",
        "showFilter": true,
        "defaultValue": "RELEVANCE_ASC",
        "options": [
          {
            "urlValue": "relevance",
            "value": "RELEVANCE_ASC"
          },
          {
            "urlValue": "nightly_price_asc",
            "value": "NIGHTLY_PRICE_ASC"
          },
          {
            "urlValue": "nightly_price_desc",
            "value": "NIGHTLY_PRICE_DESC"
          },
          {
            "urlValue": "sleeps_asc",
            "value": "SLEEPS_ASC"
          },
          {
            "urlValue": "sleeps_desc",
            "value": "SLEEPS_DESC"
          },
          {
            "urlValue": "latest",
            "value": "CREATED_AT_DESC"
          }
        ]
      },
      "page": {
        "active": true,
        "showFilter": true,
        "urlParam": "page",
        "defaultValue": 1,
        "marginPagesDisplayed": 1,
        "pageRangeDisplayed": 5
      }
    },
    "elasticSearch": {
      "app": "lycan_main.leavetown_production.properties_kw0qmw",
      "credentials": "leavetown:password",
      "url": "https://search.es.rentivo.com:9243",
      "size": 12
    }
  },
  "property": {
    "headline": {
      "showSubtitle": true
    },
    "price": {
      "type": "PRICE_RANGE",
      "period": "WEEKLY"
    },
    "pricing": {
      "actions": {
        "enquiryDisplayMode": "ON_ANY_RESPONSE",
        "requestToBookDisplayMode": "ON_SUCCESSFUL_PRICE_INCLUDING_ENQUIRY"
      },
      "alwaysShowBeforeArrivalFees": true,
      "alwaysShowAfterArrivalFees": true,
      "minNights": 1,
      "maxNights": 31,
      "data": {
        "guests": {
          "urlParam": "guests",
          "defaultValue": 0,
          "min": 0,
          "max": 48
        },
        "adults": {
          "active": true,
          "urlParam": "adults",
          "countsToTotal": true,
          "defaultValue": 0,
          "min": 0,
          "max": 24
        },
        "children": {
          "active": true,
          "urlParam": "children",
          "countsToTotal": true,
          "defaultValue": 0,
          "min": 0,
          "max": 24
        },
        "infants": {
          "active": true,
          "urlParam": "infants",
          "countsToTotal": false,
          "defaultValue": 0,
          "min": 0,
          "max": 24
        },
        "pets": {
          "active": true,
          "urlParam": "pets",
          "countsToTotal": false,
          "defaultValue": 0,
          "min": 0,
          "max": 10
        },
        "startDate": {
          "urlParam": "check_in"
        },
        "endDate": {
          "urlParam": "check_out"
        },
        "nights": {
          "urlParam": "nights"
        }
      }
    },
    "map": {
      "experiences": {
        "include": true,
        "showByDefault": true
      },
      "defaultZoom": 14,
      "maxZoom": 20,
      "minZoom": 1,
      "useFuzzyRadius": false,
      "fuzzyRadius": 200,
      "useCustomMarker": false,
      "customMarker": {
        "offsetLeft": -12,
        "offsetTop": -24,
        "imageURL": "http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png",
        "imageWidth": 24,
        "imageHeight": 24
      }
    }
  },
  "checkout": {
    "payment": {
      "defaultAcceptedPaymentBrands": ["visa", "mastercard", "amex"]
    },
    "info": {
      "phoneRequired": false
    },
    "success": {
      "reservationIdPath": "reservationExternalConnections[0].externalReservationId"
    },
    "messageToAgent": {
      "active": true,
      "required": false
    },
    "enquiryModal": {
      "active": true
    },
    "checkboxes": {
      "showMarketingOptIn": false,
      "showTermsAndConditions": true,
      "showPrivacyPolicy": true,
      "defaultPrivacyPolicy": "https://leavetown.netlify.app/privacy-policy/",
      "defaultTermsAndConditions": "https://leavetown.netlify.app/terms-and-conditions/"
    }
  },
  "blog": {
    "perPage": 20
  },
  "routePaths": {
    "ROUTE_BASE_SEARCH": "destinations",
    "ROUTE_BASE_PROPERTY": "accommodation",
    "ROUTE_BASE_CHECKOUT": "checkout",
    "ROUTE_BASE_CHECKOUT_REVIEW": "review",
    "ROUTE_BASE_CHECKOUT_GUEST_INFO": "info",
    "ROUTE_BASE_CHECKOUT_CONFIRM": "confirm",
    "ROUTE_BASE_CHECKOUT_SUCCESS": "success",
    "ROUTE_BASE_POSTS": "magazine",
    "ROUTE_BASE_POSTS_CATEGORIES": "categories",
    "ROUTE_BASE_POSTS_TAGS": "tags",
    "ROUTE_BASE_POSTS_AUTHOR": "author",
    "ROUTE_PATH_HOME": "",
    "ROUTE_BASE_NOT_FOUND": "404",
    "ROUTE_BASE_CUSTOMER_CONTACT": "contact",
    "ROUTE_BASE_BUSINESS_CONTACT": "contact/business"
  },
  "theme": {
    "id": "barcelona",
    "variables": {
      "base": {
        "body-background": "#fff",
        "component-background": "#fff",
        "primary-color": "#f26863",
        "error-color": "#ff8469",
        "info-color": "#28a59b",
        "success-color": "#52c41a",
        "text-color": "#3D405B",
        "text-color-secondary": "#41485b",
        "heading-color": "#3D405B",
        "link-color": "#f26863",
        "normal-color": "#d9d9d9",
        "item-hover-bg": "#f5f5f5",
        "background-color-light": "#f5f5f5",
        "background-color-base": "#fafafa",
        "link-decoration": "none",
        "link-hover-decoration": "none",

        "shadow-color": "rgba(0, 0, 0, 0.15)",
        "box-shadow-base": "0 0.23rem 1.09rem rgba(8,10,37,.03), 0 0.465rem 0.70rem rgba(8,10,37,.03), 0 0.125rem 0.265rem rgba(8,10,37,.05), 0 0.0625rem 0.0935rem rgba(8,10,37,.03)",

        "font-family": "'Montserrat', sans-serif",
        "code-family": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        "font-size-base": "15px",
        "font-size-lg": "17px",
        "font-size-sm": "13px",
        "line-height-base": "1.5715",
        "heading-1-size": "28px",
        "heading-2-size": "24px",
        "heading-3-size": "20px",
        "heading-4-size": "18px",

        "typography-title-margin-top": "1.2em",
        "typography-title-margin-bottom": "0.5em",

        "border-radius-base": "6px",
        "border-width-base": "1px",
        "border-color-base": "#d9d9d9",
        "border-color-split": "#d9d9d9",
        "border-color-inverse": "#ffffff",

        "padding-lg": "24px",
        "padding-md": "16px",
        "padding-sm": "12px",
        "padding-xs": "8px",

        "screen-xs": "480px",
        "screen-sm": "576px",
        "screen-md": "768px",
        "screen-lg": "992px",
        "screen-xl": "1200px",
        "screen-xxl": "1600px",

        "layout-header-height": "80px",

        "btn-border-radius-base": "6px",
        "btn-border-radius-sm": "4px",
        "btn-font-weight": "500",
        "btn-shadow": "none",
        "btn-primary-shadow": "none",
        "btn-text-shadow": "none",

        "btn-padding-horizontal-base": "16px",
        "btn-padding-horizontal-lg": "16px",
        "btn-padding-horizontal-sm": "8px",
        "btn-height-base": "40px",
        "btn-height-lg": "48px",
        "btn-height-sm": "30px",
        "btn-font-size-sm": "15px",

        "popover-bg": "#ffffff",
        "popover-min-width": "200px",
        "popover-arrow-width": "14px",
        "popover-arrow-color": "#ffffff",
        "popover-arrow-outer-color": "#ffffff",
        "popover-distance": "16px",


        "dropdown-vertical-padding": "5px",
        "dropdown-edge-child-vertical-padding": "4px",
        "dropdown-line-height": "22px",
        "dropdown-selected-color": "#f5f5f5",

        "select-item-selected-font-weight": "500",
        "select-dropdown-bg": "#ffffff",
        "select-item-selected-bg": "#f5f5f5",
        "select-background": "#ffffff",
        "select-clear-background": "#ffffff",
        "select-selection-item-bg": "#f5f5f5",
        "select-selection-item-border-color": "#f0f0f0",

        "checkbox-size": "20px",
        "checkbox-color": "#f26863",
        "checkbox-check-color": "#ffffff",
        "checkbox-border-width": "2px",

        "input-height-base": "40px",
        "input-height-lg": "48px",
        "input-height-sm": "30px",
        "input-padding-horizontal": "16px",
        "input-padding-horizontal-base": "16px",
        "input-padding-horizontal-sm": "8px",
        "input-padding-horizontal-lg": "16px",
        "input-placeholder-color": "#aaaaaa",
        "input-bg": "#ffffff",

        "animation-duration-slow": "0.2s",
        "animation-duration-base": "0.3s",
        "animation-duration-fast": "0.1s",
        "ease-base-out": "cubic-bezier(0.7, 0.3, 0.1, 1)",
        "ease-base-in": "cubic-bezier(0.9, 0, 0.3, 0.7)",
        "ease-out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "ease-in": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "ease-in-out": "cubic-bezier(0.645, 0.045, 0.355, 1)",
        "ease-out-back": "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
        "ease-in-back": "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
        "ease-in-out-back": "cubic-bezier(0.71, -0.46, 0.29, 1.46)",
        "ease-out-circ": "cubic-bezier(0.08, 0.82, 0.17, 1)",
        "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.34)",
        "ease-in-out-circ": "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",

        "menu-inline-toplevel-item-height": "36px",
        "menu-item-height": "36px",
        "menu-collapsed-width": "80px",
        "menu-bg": "#ffffff",
        "menu-popup-bg": "#ffffff",
        "menu-item-color": "rgba(255, 255, 255, 0.85)",
        "menu-highlight-color": "#ffffff",
        "menu-item-active-bg": "#ebf9f9",
        "menu-item-active-border-width": "0",
        "menu-item-group-title-color": "#38343f",
        "menu-item-vertical-margin": "2px",
        "menu-item-font-size": "15px",
        "menu-item-boundary-margin": "0",
        "menu-dark-color": "rgba(255,255,255,0.85)",
        "menu-dark-bg": "#3d3d44",
        "menu-dark-arrow-color": "#fff",
        "menu-dark-submenu-bg": "#000c17",
        "menu-dark-highlight-color": "#fff",
        "menu-dark-item-active-bg": "#ebf9f9",
        "menu-dark-selected-item-icon-color": "#ffffff",
        "menu-dark-selected-item-text-color": "#ffffff",
        "menu-dark-item-hover-bg": "transparent",




        "primary-hover-color": "#b64e4a",
        "text-gray-color": "#41485b",

        "secondary-color": "#3f90ce",
        "secondary-hover-color": "#3982b9",

        "btn-primary-text-color": "#ffffff",
        "btn-primary-hover-text-color": "#ffffff",
        "btn-secondary-text-color": "#ffffff",
        "btn-secondary-hover-text-color": "#ffffff",

        "btn-secondary-shadow": "none",

        "box-shadow-lg": "0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03)",

        "gray-1": "#fff",
        "gray-2": "#fafafa",
        "gray-3": "#f5f5f5",
        "gray-4": "#f0f0f0",
        "gray-5": "#d9d9d9",
        "gray-6": "#bfbfbf",
        "gray-7": "#8c8c8c",
        "gray-8": "#595959",
        "gray-9": "#434343",
        "gray-10": "#262626",
        "gray-11": "#1f1f1f",
        "gray-12": "#141414",
        "gray-13": "#000",

        "padding-xl": "32px",
        "padding-xxl": "64px",
        "padding-xxxl": "128px",
        "padding-xxs": "4px",

        "typography-letter-spacing": "0",
        "typography-font-weight": "500",
        "typography-font-weight-thick": "600",

        "heading-line-height-base": "1.6",
        "content-heading-line-height-base": "1.75",

        "heading-5-size": "17px",

        "heading-1-font-weight": "700",
        "heading-2-font-weight": "700",
        "heading-3-font-weight": "700",
        "heading-4-font-weight": "700",
        "heading-5-font-weight": "700",
        "heading-1-font-family": "'Montserrat', sans-serif",
        "heading-2-font-family": "'Montserrat', sans-serif",
        "heading-3-font-family": "'Montserrat', sans-serif",
        "heading-4-font-family": "'Montserrat', sans-serif",
        "heading-5-font-family": "'Montserrat', sans-serif",
        "heading-1-letter-spacing": "0",
        "heading-2-letter-spacing": "0",
        "heading-3-letter-spacing": "0",
        "heading-4-letter-spacing": "0",
        "heading-5-letter-spacing": "0",

        "content-width": "992px",
        "content-width-wide": "1200px",
        "content-line-height-base": "1.75",
        "content-font-size-base": "15px",
        "content-font-family": "'Montserrat', sans-serif",
        "content-letter-spacing": "0",
        "content-heading-1-size": "48px",
        "content-heading-2-size": "36px",
        "content-heading-3-size": "28px",
        "content-heading-4-size": "24px",
        "content-heading-1-font-weight": "700",
        "content-heading-2-font-weight": "700",
        "content-heading-3-font-weight": "700",
        "content-heading-4-font-weight": "700",
        "content-heading-5-font-weight": "700",
        "content-heading-1-font-family": "'Montserrat', sans-serif",
        "content-heading-2-font-family": "'Montserrat', sans-serif",
        "content-heading-3-font-family": "'Montserrat', sans-serif",
        "content-heading-4-font-family": "'Montserrat', sans-serif",
        "content-heading-5-font-family": "'Montserrat', sans-serif",
        "content-heading-1-letter-spacing": "0",
        "content-heading-2-letter-spacing": "0",
        "content-heading-3-letter-spacing": "0",
        "content-heading-4-letter-spacing": "0",
        "content-heading-5-letter-spacing": "0",

        "popover-arrow-top-distance": "6px",
        "popover-arrow-bottom-distance": "10px",
        "popover-padding": "16px 24px",
        "popover-shadow": "0 0 16px rgba(0, 0, 0, 0.15)",

        "dropdown-border-radius": "7px",

        "input-border-radius": "6px",
        "input-border": "1px solid #d9d9d9",
        "input-box-shadow": "none",

        "btn-primary-shadow-lg": "none",

        "calendar-default-bg-color": "#ffffff",
        "calendar-default-hover-bg-color": "#eeeeee",
        "calendar-default-color": "#3D405B",
        "calendar-hovered-offset-bg-color": "#bfecee",
        "calendar-hovered-offset-color": "#3D405B",
        "calendar-selected-span-bg-color": "#4dc9cf",
        "calendar-selected-span-color": "#ffffff",
        "calendar-selected-bg-color": "#00b2bb",
        "calendar-selected-color": "#ffffff",
        "calendar-blocked-bg-color": "repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, #e0e0e0 3px, #d2d2d2 4px)",
        "calendar-blocked-color": "#cccccc",

        "menu-horizontal-border-bottom": "1px solid transparent",
        "menu-horizontal-border-bottom-active": "1px solid transparent",
        "menu-horizontal-side-padding": "10px",
        "menu-item-font-weight": "500",

        "fa-icon-primary": "#f26863",
        "fa-icon-secondary": "#f26863"
      },
      "theme": {
        "site-header-fluid": true,
        "site-header-theme": "light",
        "search-primary-filters-theme": "light",
        "search-primary-filters-height": "64px",
        "search-primary-filters-bg": "#ffffff",
        "search-primary-filters-border-bottom": "1px solid #f1f1f1",
        "search-primary-filters-box-shadow": "none",
        "search-content-bg": "#ffffff"
      }
    }
  },
  "chakraTheme": {
    "barcelona": {
      "search": {
        "defaultType": "list",
        "showViewButton": false,
        "moreFilters": [
          {
            "type": "keyword"
          },
          {
            "type": "title",
            "title": "FILTER_TITLE_ROOMS_BEDS",
            "props": {
              "as": "h5",
              "mb": -2
            }
          },
          {
            "type": "bedrooms"
          },
          {
            "type": "beds"
          },
          {
            "type": "bathrooms"
          },
          {
            "type": "tagsFlags"
          },
          {
            "type": "discounts"
          },
          {
            "title": "FILTER_TITLE_FEATURES",
            "type": "features"
          },
          {
            "title": "FILTER_TITLE_TYPE",
            "type": "features",
            "props": {
              "filterConfigKey": "type"
            }
          },
          {
            "title": "FILTER_TITLE_LOCATION_FILTERS",
            "type": "features",
            "props": {
              "filterConfigKey": "locationFeatures"
            }
          },
          {
            "title": "FILTER_TITLE_SUITABILITY",
            "type": "features",
            "props": {
              "filterConfigKey": "suitability"
            }
          },
          {
            "title": "FILTER_TITLE_RELAX",
            "type": "features",
            "props": {
              "filterConfigKey": "relax"
            }
          },
          {
            "type": "price"
          }
        ],
        "layout": {
          "searchArea": {
            "mapOpen": {
              "base": {
                "colSpan": 24,
                "perRow": 1,
                "type": "grid"
              },
              "md": {
                "colSpan": 14,
                "perRow": 1,
                "type": "grid"
              },
              "lg": {
                "colSpan": 16,
                "perRow": 2,
                "type": "grid"
              },
              "xl": {
                "colSpan": 14,
                "perRow": 1,
                "type": "list"
              },
              "xxl": {
                "colSpan": 12,
                "perRow": 1,
                "type": "list"
              }
            },
            "mapClosed": {
              "base": {
                "perRow": 1,
                "type": "grid"
              },
              "md": {
                "perRow": 2,
                "type": "grid"
              },
              "lg": {
                "perRow": 3,
                "type": "grid"
              },
              "xl": {
                "perRow": 4,
                "type": "grid"
              },
              "xxl": {
                "perRow": 5,
                "type": "grid"
              }
            }
          }
        }
      }
    },
    "colors": {
      "text": "#3D405B",
      "textLight": "#535678",
      "link": "#f9593f",
      "linkHover": "#f13829",
      "primary": {
        "50":  "#fcf8f4",
        "100": "#fceee9",
        "200": "#fad7d1",
        "300": "#f9b5a7",
        "400": "#f07167",
        "500": "#f9593f",
        "600": "#f13829",
        "700": "#d42a28",
        "800": "#aa2327",
        "900": "#881d23"
      },
      "secondary": {
        "50":  "#edf9f9",
        "100": "#d1f7f5",
        "200": "#9ff1e9",
        "300": "#61e7dc",
        "400": "#1fd4c8",
        "500": "#00afb9",
        "600": "#089f90",
        "700": "#0e8174",
        "800": "#11645b",
        "900": "#105149"
      },
      "tertiary": {
        "50":  "#f9f4e3",
        "100": "#faeebb",
        "200": "#f6e57c",
        "300": "#f1d239",
        "400": "#ffad02",
        "500": "#e49406",
        "600": "#d47104",
        "700": "#b45508",
        "800": "#94420e",
        "900": "#7a3610"
      },
      "gray": {
        "100": "#F6F6F6"
      }
    },
    "fontWeights": {
      "hairline": 100,
      "thin": 200,
      "light": 400,
      "normal": 500,
      "medium": 600,
      "semibold": 600,
      "bold": 700,
      "extrabold": 700,
      "black": 700
    },
    "fonts": {
      "heading": "'Montserrat', sans-serif",
      "body": "'Montserrat', sans-serif",
      "mono": "SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace"
    },
    "fontSizes": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "md": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem"
    },
    "typography": {
      "text": {
        "fontFamily": "body"
      },
      "textWriting": {
        "fontFamily": "body"
      },
      "heading": {
        "h1": {
          "fontFamily": "body",
          "fontWeight": "bold",
          "lineHeight": "shorter",
          "fontSize": { "base": "2xl", "lg": "3xl" },
          "color": "text"
        },
        "h2": {
          "fontFamily": "body",
          "fontWeight": "bold",
          "lineHeight": "shorter",
          "fontSize": { "base": "xl", "lg": "2xl" },
          "color": "text"
        },
        "h3": {
          "fontFamily": "body",
          "fontWeight": "bold",
          "lineHeight": "shorter",
          "fontSize": { "base": "lg", "lg": "xl" },
          "color": "text"
        },
        "h4": {
          "fontFamily": "body",
          "fontWeight": "semibold",
          "lineHeight": "shorter",
          "fontSize": { "base": "md", "lg": "lg" },
          "color": "text"
        },
        "h5": {
          "fontFamily": "body",
          "fontWeight": "semibold",
          "lineHeight": "shorter",
          "fontSize": "md",
          "color": "text"
        },
        "h6": {
          "fontFamily": "body",
          "fontWeight": "semibold",
          "lineHeight": "shorter",
          "fontSize": "md",
          "color": "text"
        }
      },
      "writingHeading": {
        "h1": {
          "fontFamily": "body",
          "fontWeight": "bold",
          "lineHeight": "shorter",
          "fontSize": { "base": "34px", "md": "38px", "lg": "42px" },
          "color": "text"
        },
        "h2": {
          "fontFamily": "body",
          "fontWeight": "bold",
          "lineHeight": "shorter",
          "fontSize": { "base": "24px", "md": "28px", "lg": "32px" },
          "color": "text"
        },
        "h3": {
          "fontFamily": "body",
          "fontWeight": "bold",
          "lineHeight": "shorter",
          "fontSize": { "base": "20px", "md": "20px", "lg": "24px" },
          "color": "text"
        },
        "h4": {
          "fontFamily": "body",
          "fontWeight": "semibold",
          "lineHeight": "shorter",
          "fontSize": { "base": "18px", "lg": "20px" },
          "color": "text"
        },
        "h5": {
          "fontFamily": "body",
          "fontWeight": "semibold",
          "lineHeight": "shorter",
          "fontSize": { "base": "16px", "lg": "18px" },
          "color": "text"
        },
        "h6": {
          "fontFamily": "body",
          "fontWeight": "semibold",
          "lineHeight": "shorter",
          "fontSize": "16px",
          "color": "text"
        }
      }
    },
    "layerStyles": {

    },
    "components": {
      "Button": {
        "sizes": {
          "lg": {
            "fontSize": "xl",
            "px": "32px"
          }
        }
      },
      "HeaderNavbar": {
        "parts": ["header"],
        "baseStyle": {
          "type": "light",
          "header": {
            "height": "80px",
            "boxShadow": "0 0 5px 1px rgba(0, 0, 0, 0.05)",
            "bg": "white"
          },
          "container": {
            "maxW": "container.full"
          }
        }
      }
    }
  }
};

export default siteConfig;
