// leetcode 3 - longest substring without repeating characters
/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param s - The input string
 * @returns The length of the longest substring without repeating characters
 *
 * example 1
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * example 2
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * example 3
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */

export function lengthOfLongestSubstring(s: string): number {
  let usedChars = new Set<string>()
  let maxLength = 0
  let right = 0
  let left = 0

  while (right < s.length) {
    if (usedChars.has(s[right])) {
      if (s[left] !== s[right]) {
        usedChars.delete(s[left])
      } else {
        right++
      }
      left++
    } else {
      usedChars.add(s[right])
      right++
      maxLength = Math.max(maxLength, right - left)
    }
  }
  return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
