import {get, post} from "./storageApi";
import {IReminder} from "../types/reminder";

export const getReminders = (): IReminder[] => {
  return get('reminderList') || [];
}

export const getReminder = (id: string) => {
  return getReminders().find(reminder => reminder.id === id)
}

export const getReminderByNoteId = (note_id: string) => {
  return getReminders().find(reminder => reminder.note_id === note_id)
}

export const saveReminder = (reminder: IReminder) => {
  const reminders = getReminders();
  reminders.forEach((_reminder, index) => {
    if (_reminder.id === reminder.id) {
      reminders[index] = reminder;
    }
  })

  post('reminderList', reminders);
}

export const removeReminder = (id: string) => {
  let reminders = getReminders();
  reminders = reminders.filter((_reminder: IReminder) => id !== _reminder.id);

  post('reminderList', reminders);
}

export const createReminder = (reminder: IReminder): IReminder => {
  reminder.id = Date.now().toString();

  const reminders = getReminders();
  reminders.push(reminder)
  post('reminderList', reminders);

  return reminder;
}
