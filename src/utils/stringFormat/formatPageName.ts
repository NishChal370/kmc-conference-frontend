

/**
 * It convert name like "account" , "fund-transfer" 
 * to "Account", "Fund Transfer"
 * 
 * @param pageName - unformatted pageName, taken from pathName 
 * @returns formatted page name.
 */
function formatPageName(pageName: string) {
      const words = pageName.split('-');

      const formattedWords =
            words.map(
                  word => word
                        .charAt(0)
                        .toUpperCase() + word.slice(1)
            );

      return formattedWords.join(' ');
}

export default formatPageName