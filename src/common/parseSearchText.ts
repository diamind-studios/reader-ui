const parseBookName = (splitQuery: string[]) => {
  return Number(splitQuery[0])
    ? splitQuery.slice(0, splitQuery.length - 2 ? splitQuery.length - 1 : 2 || 2).join(' ')
    : splitQuery.slice(0, splitQuery.length - 1 || 1).join(' ');
};

const parseChapter = (splitQuery: string[]): number => {
  const chapter = Number(splitQuery[0])
    ? splitQuery
        .slice(splitQuery.length - 2 ? splitQuery.length - 1 : 2 || 1)
        .join(' ')
        .split(':')[0] || '1'
    : splitQuery
        .slice(splitQuery.length - 1 || 1)
        .join(' ')
        .split(':')[0] || '1';
  return Number(chapter);
};

const parseVerseNumber = (splitQuery: string[]): number => {
  const parsedVerse =
    splitQuery
      .slice(splitQuery.length - 1)
      .join(' ')
      .split(':')[1] || '1';
  return Number(parsedVerse);
};

export const parseSearchText = (searchQuery: string) /*: PassageQuery*/ => {
  const splitQuery = searchQuery.replace(/ {2,}/g, ' ').split(' ');
  const book_name = parseBookName(splitQuery);
  const chapter = parseChapter(splitQuery) || 1;
  const verse = parseVerseNumber(splitQuery) || 1;
  const params = {
    'book_name.like': book_name,
    chapter,
    verse,
  };
  // test splitQuery values: [['1','sam'], ['gen'], ['gen', '4'], ['1','sam','5'], ['g', '1:5'],['song','of','songs','1']]
  // test: for (s of x) {console.log('searched:',s); console.log('book:',bk(s)); console.log('chapter:',ch(s)); console.log('verse:',ver(s)); console.log()}
  // if 1st item is number: always checks for 2
  return params;
};
