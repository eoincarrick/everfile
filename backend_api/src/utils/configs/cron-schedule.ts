import cron from 'cron';
import { GuestScheduleDeletion } from '../services';

export const job = new cron.CronJob('0 * * * *', () => {
  GuestScheduleDeletion();
});

export const startCronJob = (): void => {
  job.start();
};