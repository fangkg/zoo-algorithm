// 动态规划
const longestPalindrome = function(s) {
    const dp = [];
    for(let i = 0; i < s.length; i += 1) {
        dp[i] = [];
    }
    let max = -1;
    let str = "";
    for(let l = 0; l < s.length; l += 1) {
        for(let i = 0; i + l < s.length; i += 1) {
            const j = i + l;
            if(l === 0) {
                dp[i][j] = true;
            } else if(l <= 2) {
                if(s[i] === s[j]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            } else {
                if((s[i] === s[j]) && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            }
            if(dp[i][j] && l > max) {
                max = l;
                str = s.substring(i, j + 1);
            }
        }
    }

    return str;
}