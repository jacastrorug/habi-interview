const FormSteps = {
  router_config: {
    steps: [
      {
        name: "Nombres",
        component: "Names",
        path: "/form/names",
        index: 0,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: true,
        inputs: [
          {
            property_name: "full_name",
            property_type: "string"
          }
        ]
      },
      {
        name: "Email",
        component: "Email",
        path: "/form/email",
        index: 1,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: true,
        inputs: [
          {
            property_name: "user_email",
            property_type: "email"
          }
        ]
      },
      {
        name: "Dirección",
        component: "Address",
        path: "/form/address",
        index: 2,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: true,
        inputs: [
          {
            property_name: "user_adress",
            property_type: "string"
          }
        ]
      },
      {
        name: "Número de piso",
        component: "ApartmentFloor",
        path: "/form/apartment-floor",
        index: 3,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: true,
        inputs: [
          {
            property_name: "apartment_floor",
            property_type: "floor"
          }
        ]
      },
      {
        name: "Info apartamento",
        component: "ApartmentOptions",
        path: "/form/apartment-options",
        index: 4,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: false,
        inputs: [
          {
            property_name: "apartment_options",
            property_type: "option"
          }
        ]
      },
      {
        name: "Parqueadero",
        component: "Parking",
        path: "/form/parking",
        index: 5,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: true,
        inputs: [
          {
            property_name: "parking",
            property_type: "option"
          },
          {
            property_name: "covered",
            property_type: "boolean"
          }
        ]
      },
      {
        name: "Valor",
        component: "Amount",
        path: "/form/amount",
        index: 6,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: true,
        inputs: [
          {
            property_name: "amount",
            property_type: "currency"
          }
        ]
      },
      {
        name: "Foto apartamento",
        component: "ApartmentPicture",
        path: "/form/apartment-picture",
        index: 7,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: false,
        inputs: [
          {
            property_name: "apartment_picture",
            property_type: "image"
          }
        ]
      },
      {
        name: "Acensor",
        component: "ApartmentElevator",
        path: "/form/apartment-elevator",
        index: 8,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        required: false,
        inputs: [
          {
            property_name: "apartment_elevator",
            property_type: "boolean"
          }
        ]
      }
    ]
  }
};

export default FormSteps;