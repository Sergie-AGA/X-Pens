import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website freelance",
          type: "income",
          category: "business",
          value: 2000,
          createdAt: new Date("2021-04-15 14:00:00"),
        },
        {
          id: 2,
          title: "Rent",
          type: "expense",
          category: "house",
          value: 1400,
          createdAt: new Date("2021-05-01 14:00:00"),
        },
        {
          id: 3,
          title: "Stocks selling",
          type: "income",
          category: "investment",
          value: 1530.27,
          createdAt: new Date("2021-05-01 14:00:00"),
        },
        {
          id: 4,
          title: "Repair of broken computer at shopping centre",
          type: "expense",
          category: "service",
          value: 130,
          createdAt: new Date("2021-05-01 14:00:00"),
        },
        {
          id: 5,
          title: "Electric bill",
          type: "expense",
          category: "bill",
          value: 183.7,
          createdAt: new Date("2021-05-01 14:00:00"),
        },
        {
          id: 6,
          title: "Wac Ronalds",
          type: "expense",
          category: "food",
          value: 14.22,
          createdAt: new Date("2021-05-01 14:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
