import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useAddress = () => {
  const { address } = useSelector((state: RootState) => state.wrapper);

  const getProvince = (id: string) => {
    if (!id) return null;
    const province = address?.find((ele) => ele.Id === id);
    return province;
  };
  const getDistrict = (id: string): { Id: string; Name: string } | null => {
    for (const ele of address)
      if (ele.Districts)
        for (const element of ele.Districts)
          if (element.Id === id) return element;

    return null;
  };

  const getWard = (id: string): { Id: string; Name: string } | null => {
    for (const ele of address)
      if (ele.Districts)
        for (const element of ele.Districts)
          if (element.Wards)
            for (const item of element.Wards) if (item.Id === id) return item;
    return null;
  };

  return {
    getProvince,
    getDistrict,
    getWard,
  };
};

export { useAddress };
