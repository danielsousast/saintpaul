import {parseISO, format} from 'date-fns';

export function formatDate(dateISO: string): string {
  return format(parseISO(dateISO), 'dd/MM/yyyy HH:mm');
}
