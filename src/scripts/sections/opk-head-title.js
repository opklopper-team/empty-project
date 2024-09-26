const SELECTORS = {
    headTetle: '.js-head-title',
    headWords: '.js-head-words'
}

const CLASSNAME = {
    words: 'head_title__word'
}

const headTitle = () => {
    const $titles = document.querySelectorAll(SELECTORS.headTetle);
    if (!$titles.length) return;    

    $titles.forEach(($title) => {       
        const splitTitle = new SplitText($title, {
            type: 'words',
            wordsClass: CLASSNAME.words,
        });

        const { words } = splitTitle;
        if (!words) return;
    });

}

export default headTitle;