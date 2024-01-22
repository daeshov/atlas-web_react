import * as notificationsData from "../../notifications.json";
import { normalize, schema } from "normalizr";

export function getAllNotificationsByUser(userId) {
  const user = new schema.Entity("users");

  const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

  const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
  });

  const normalizedData = normalize(notificationsData.default, [notification]);
  const notificationIds = normalizedData.result || [];
  const notifications = notificationIds.map((id) => normalizedData.entities.notifications[id]);

  console.log("normalizedData:", normalizedData);
  return notifications;
}
