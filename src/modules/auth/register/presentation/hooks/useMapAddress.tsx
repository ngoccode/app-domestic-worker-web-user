const useMapAddress = () => {
  const optionsAddress = (value: any[]) => {
    if (!value) return [];
    return value.map((element) => ({
      label: element.Name,
      value: element.Id,
    }));
  };
  return { optionsAddress };
};

export { useMapAddress };
