function replaceWords(dictionary, sentence) {
    const successorToRoot = {};

    for (const root of dictionary) {
        const successor = root.slice(1);
        if (!(successor in successorToRoot) || root.length < successorToRoot[successor].length) {
            successorToRoot[successor] = root;
        }
    }

    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (const successor in successorToRoot) {
            if (word.endsWith(successor)) {
                words[i] = successorToRoot[successor] + word.slice(successor.length);
                break; // Stop after replacing with the shortest root
            }
        }
    }
}