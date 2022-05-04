        # Example 01:
        attacks =[[1,2,7,5], [2,1,4,4], [3,6,9,2]]
        expected_res = sorted([[3,6,9,2], [2,1,4,4]])  # sorting since order is irrelevant and its easier to equate with function output then

        # Example 02:
        attacks = [[1,2,7,5], [2,1,4,4], [3,5,6,2]]
        expected_res = sorted([[3,5,6,2], [2,1,4,4]])

        # Example 03:
        attacks = [[1,2,7,6], [2,7,9,10], [3,8,9,5]]
        expected_res = sorted([[3,8,9,5], [1,2,7,6]])

        # adding my own test cases:
        attacks = [[1,1,3,9], [2,3,4,5], [3,1,5,2], [4,4,6,8], [5,3,9,1], [6,5,8,8], [7,5,10,6], [8,8,11,5]]
        expected_res = sorted([[8,8,11,5], [4,4,6,8], [1,1,3,9]])

        # All starting at the same time:
        attacks = [[1,0,2,4], [2,0,6,12], [3,0,53,6], [4,0,2,6], [5,0,8,2], [6,0,3,5]]
        expected_res = [[2,0,6,12]]

        # All ending at the same time:
        attacks = [[1,1,100,7], [2,4,100,8], [3,23,100,12], [4,31,100,6], [5,51,100,9]]
        expected_res = [[3,23,100,12]]

         
