const CONTRACT_STATUS: any = {
  pending: 'Đang chờ',
  'admin-approve': 'Admin duyệt',
  'user-submit': 'Giúp việc xác nhận',
  completed: 'Hoàn thành',
  canceled: 'Hủy ',
};

const CONTRACT_STATUS_OPTION = [
  {
    value: 'pending',
    label: 'Đang chờ',
  },
  {
    value: 'admin-approve',
    label: 'Admin duyệt',
  },
  {
    value: 'Giúp việc xác nhận',
    label: 'Đang chờ',
  },
  {
    value: 'completed',
    label: 'Hoàn thành',
  },
  {
    value: 'canceled',
    label: 'Hủy',
  },
];

const WORKING_FORM: any = {
  full_time: 'Toàn thời gian',
  past_time: 'Bán thời gian',
};
export { CONTRACT_STATUS, WORKING_FORM, CONTRACT_STATUS_OPTION };
