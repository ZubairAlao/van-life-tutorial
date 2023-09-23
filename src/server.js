import { createServer, Model } from "miragejs"




createServer({
  models: {
    events: Model, 
  },

  seeds(server) {
    server.create("event", {
      id: "1",
      name: "Nature Retreat: Wilderness Adventure",
      price: 249.99,
      description: "Escape to the great outdoors with our Nature Retreat. Experience campfire cooking, guided wildlife tours, and the tranquility of the wilderness. Connect with nature and rejuvenate your spirit.",
      imageUrl: "../../src/assets/images/event1.jpg",
      type: "Nature Retreat",
      hostId: "789",
    })
    
    server.create("event", {
        id: "2",
        name: "Glamorous Wedding Extravaganza",
        price: 4999.99,
        description: "Join us for the most glamorous wedding of the year. Experience an exquisite wedding banquet, capture every moment with professional photography and videography, and witness the union of two hearts.",
        imageUrl: "../../src/assets/images/event2.jpg",
        type: "Wedding",
        hostId: "123",
      })
      
      server.create("event", {
        id: "3",
        name: "International Tech Summit",
        price: 299.99,
        description: "Join us at the International Tech Summit, where tech leaders from around the world converge. Enjoy global cuisine, listen to inspiring keynote speeches, and participate in engaging panel discussions.",
        imageUrl: "../../src/assets/images/event3.jpg",
        type: "Tech Summit",
        hostId: "456",
      })
      
      server.create("event", {
        id: "4",
        name: "Princess-themed Birthday Party",
        price: 199.99,
        description: "Make your child's dreams come true with our Princess-themed Birthday Party. Indulge in a royal feast, let the kids dress up as their favorite princesses, and enjoy enchanting entertainment fit for royalty.",
        imageUrl: "../../src/assets/images/event4.jpg",
        type: "Birthday Party",
        hostId: "123",
      })
      
      server.create("event", {
        id: "5",
        name: "Corporate Conference 2023",
        price: 399.99,
        description: "Join us at the Corporate Conference 2023 for a day of business insights. Enjoy a business lunch, attend workshops, and network with industry leaders and professionals.",
        imageUrl: "../../src/assets/images/event5.jpg",
        type: "Conference",
        hostId: "123",
      })
      
      server.create("event", {
        id: "6",
        name: "Rock 'n' Roll Birthday Bash",
        price: 79.99,
        description: "Get ready to rock and roll at our birthday bash! Enjoy rock 'n' roll snacks, dance to a live rock band, and unleash your inner rockstar with karaoke. It's a night of music and fun.",
        imageUrl: "../../src/assets/images/event6.jpg",
        type: "Birthday Party",
        hostId: "456",
      });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/events", (schema, request) => {
      return schema.events.all();
    });

    this.get("/events/:id", (schema, request) => {
      const id = request.params.id;
      return schema.events.find(id);
    });

    this.get("/host/events", (schema, request) => {
      // hardcode the hostid for now
      return schema.events.where({hostId: "123"});
    });

    this.get("/host/events/:id", (schema, request) => {
      // hardcode the hostid for now
      const id = request.params.id;
      return schema.events.findBy({id, hostId: "123"});
    });
  }
});
