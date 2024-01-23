const combineClass = (...args: (string | number | undefined | null)[]) => {
  const results = args.filter((element) => element);
  return results.join(' ');
};

export { combineClass };
