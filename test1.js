
        # Test set 1:
        #         city:  0   1   2    # city:
        travel_days = [[-1,  1,  1],  # 0
                       [ 1, -1,  1],  # 1
                       [ 1,  2, -1]]  # 2
        #     city: 0  1    2     # day:
        revenue = [[1, 2,   1],   # 0
                   [3, 3,   1],   # 1
                   [1, 1, 100]]   # 2
        start = 0
        expected_max_profit = 101
 
        # Test set 2:
        #         city:  0   1   2    # city:
        travel_days = [[-1,  1,  1],  # 0
                       [ 1, -1,  1],  # 1
                       [ 1,  2, -1]]  # 2
        #     city: 0  1    2     # day:
        revenue = [[1, 2,   1],   # 0
                   [3, 3,   1],   # 1
                   [1, 1, 100]]   # 2
        start = 1
        expected_max_profit = 102
        
        # Test set 3:
        #         city:  0   1   2    # city:
        travel_days = [[-1,  1,  1],  # 0
                       [ 1, -1,  1],  # 1
                       [ 1,  2, -1]]  # 2
        #     city: 0  1    2     # day:
        revenue = [[1, 2,   1],   # 0
                   [3, 3,   1],   # 1
                   [1, 1, 100]]   # 2
        start = 2
        expected_max_profit = 102
        
        # Test set 4:
        #       city:    0  1  2  3   # city:
        travel_days = [[-1,-1, 3, 1], # 0
                       [-1,-1,-1, 1], # 1
                       [ 1,-1,-1, 1], # 2
                       [ 1, 1, 2,-1]] # 3
        
        #       city:    0     1  2  3 # day:
        revenue =     [[ 1,    2, 3, 4], # 0
                       [ 3,    6, 1, 5], # 1
                       [ 1,    8, 4, 1], # 2
                       [ 1,   10, 4, 5], # 3
                       [10,    4, 5, 9]] # 4
        start = 0
        expected_max_profit = 22
      
        # Test set 5:
        #       city:    0  1  2  3   # city:
        travel_days = [[-1,-1, 3, 1], # 0
                       [-1,-1,-1, 1], # 1
                       [ 1,-1,-1, 1], # 2
                       [ 1, 1, 2,-1]] # 3
        
        #       city:    0     1  2  3 # day:
        revenue =     [[ 1,    2, 3, 4], # 0
                       [ 3,    6, 1, 5], # 1
                       [ 1,    8, 4, 1], # 2
                       [ 1,   10, 4, 5], # 3
                       [10,    4, 5, 9]] # 4
        start = 1
        expected_max_profit = 30
        
        # Test set 6:
        #       city:    0  1  2  3   # city:
        travel_days = [[-1,-1, 3, 1], # 0
                       [-1,-1,-1, 1], # 1
                       [ 1,-1,-1, 1], # 2
                       [ 1, 1, 2,-1]] # 3
        #       city:    0     1  2  3 # day:
        revenue =     [[ 1,    2, 3, 4], # 0
                       [ 3,    6, 1, 5], # 1
                       [ 1,    8, 4, 1], # 2
                       [ 1,   10, 4, 5], # 3
                       [10,    4, 5, 9]] # 4
        start = 2
        expected_max_profit = 22

        # Test set 7:
        #       city:    0  1  2  3   # city:
        travel_days = [[-1,-1, 3, 1], # 0
                       [-1,-1,-1, 1], # 1
                       [ 1,-1,-1, 1], # 2
                       [ 1, 1, 2,-1]] # 3
        
        #       city:    0     1  2  3 # day:
        revenue =     [[ 1,    2, 3, 4], # 0
                       [ 3,    6, 1, 5], # 1
                       [ 1,    8, 4, 1], # 2
                       [ 1,   10, 4, 5], # 3
                       [10,    4, 5, 9]] # 4
        start = 3
        expected_max_profit = 28
