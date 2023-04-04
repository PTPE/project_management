export const isPageBottom = (pageRef: React.RefObject<HTMLDivElement>) => {
  const pageHeight = pageRef.current!.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollHeight = window.pageYOffset;
  const elementfromTop = pageRef.current!.offsetTop;
  return pageHeight === viewportHeight + scrollHeight - elementfromTop;
};
