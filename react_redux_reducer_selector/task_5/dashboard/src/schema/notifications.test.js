import { getAllNotificationsByUser, normalizedData } from "./notifications";
import * as notificationsData from "../../notifications.json";
import { normalize, schema } from "normalizr";

describe("notification_tests", function () {
  let normalizedData; // Declare normalizedData outside the beforeEach to make it accessible to all tests

  beforeEach(() => {
    const user = new schema.Entity("users");
    const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
    const notification = new schema.Entity("notifications", {
      author: user,
      context: message,
    });

    normalizedData = normalize(notificationsData.default, [notification]);
  });

  describe("read data from json", function () {
    it("Should return filtered list", function () {
      const userId = "5debd764a7c57c7839d722e9";

      const expectedReturn = [
        {
          author: "5debd764a7c57c7839d722e9",
          context: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          id: "5debd76480edafc8af244228",
        },
      ];
      const filtered = getAllNotificationsByUser(userId);
      console.log("filtered:", filtered);
      expect(filtered).toEqual(expect.arrayContaining(expectedReturn));
    });
    
    describe("reads data from JSON and normalizes it", function () {
      it("normalized data has a correct result array", function () {
        const expectedReturn = [
          "5debd76480edafc8af244228",
          "5debd764507712e7a1307303",
          "5debd76444dd4dafea89d53b",
          "5debd76485ee4dfd1284f97b",
          "5debd7644e561e022d66e61a",
          "5debd7644aaed86c97bf9d5e",
          "5debd76413f0d5e5429c28a0",
          "5debd7642e815cd350407777",
          "5debd764c1127bc5a490a4d0",
          "5debd7646ef31e0861ec1cab",
          "5debd764a4f11eabef05a81d",
          "5debd764af0fdd1fc815ad9b",
          "5debd76468cb5b277fd125f4",
          "5debd764de9fa684468cdc0b",
        ];

        const result = normalizedData.result;
        expect(result).toEqual(expect.arrayContaining(expectedReturn));
      });
      it("has a correct users entity", function () {
        const user = normalizedData.entities.users["5debd764a7c57c7839d722e9"];
        const expectedReturn = {
          age: 25,
          email: "poole.sanders@holberton.nz",
          id: "5debd764a7c57c7839d722e9",
          name: { first: "Poole", last: "Sanders" },
          picture: "http://placehold.it/32x32",
        };

        expect(user).toEqual(expectedReturn);
      });

      it("has a correct messages entity", function () {
        const message =
          normalizedData.entities.messages[
            "efb6c485-00f7-4fdf-97cc-5e12d14d6c41"
          ];
        const expectedReturn = {
          guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
          isRead: false,
          type: "default",
          value: "Cursus risus at ultrices mi.",
        };

        expect(message).toEqual(expectedReturn);
      });
      
      it("has a correct notifications", function () {
        const notification =
          normalizedData.entities.notifications["5debd7642e815cd350407777"];
        const expectedReturn = {
          author: "5debd764f8452ef92346c772",
          context: "3068c575-d619-40af-bf12-dece1ee18dd3",
          id: "5debd7642e815cd350407777",
        };

        expect(notification).toEqual(expectedReturn);
      });
    });
  });
});