/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
      var m = matrix.length;
      var n = (matrix[0] || []).length;
      var dp = Array(m).fill(0).map(_ => Array(n));
      var max = 0;

      for (var k = 0; k < m; k++) {
        dp[k][0] = matrix[k][0] === '1' ? 1 : 0;
        max = Math.max(max, dp[k][0]);
      }

      for (var p = 0; p < n; p++) {
        dp[0][p] = matrix[0][p] === '1' ? 1 : 0;
        max = Math.max(max, dp[0][p]);
      }

      for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
          if (matrix[i][j] === '1') {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            max = Math.max(max, dp[i][j]);
          } else {
            dp[i][j] = 0;
          }
        }
      }

      return max * max;
};