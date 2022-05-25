
from assignment4 import allocate, EventsTrie
import unittest

class TestAssignment(unittest.TestCase):
    def setUp(self) -> None:
        # Create list of errors to collect over all tests:
        self.errorList = []
    
    def tearDown(self) -> None:
        # Print all errors found:
        for e in self.errorList:
            print(e)
        print(f"Number of errors: {len(self.errorList)}")
    
    def test_allocate(self) -> None:
        # my lord this was a pain to do 
        # Test 1 with Preference set #1:
        preferences =  [[0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
                        [1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
                        [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                        [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
                        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
                        [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                        [1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
                        [1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
                        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
                        [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0]]
        min_shifts = 5
        max_unwanted_shifts = 10
        sys_admins_per_night = 6
        expectingNone = False
        try:
            res = allocate(preferences, sys_admins_per_night, max_unwanted_shifts, min_shifts)
            # Validate output:
            if expectingNone:
                self.assertIsNone(res, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} should have returned None\nYour output was: {res}\n")
            else:
                # Check the min shifts of all workers:
                for i in range(len(res[0])):
                    self.assertLessEqual(min_shifts, sum(d[i] for d in res), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not meet the minimum shift requirement.\nYour output was: {res}\n")
                
                # Check the max unwanted shifts is not exceeded:
                for i in range(len(res[0])):
                    num_unwated = 0
                    for d in range(len(res)):
                        if preferences[d][i] == 0 and res[d][i]: num_unwated += 1
                    self.assertLessEqual(num_unwated, max_unwanted_shifts, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} exceeded the maximum unwanted shift requirement.\nYour output was: {res}\n")
                
                # Check the sys_admins per night:
                for d in range(len(res)):
                    self.assertEqual(sys_admins_per_night, sum(res[d]), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not match the sys_admins_per_night requirement.\nYour output was: {res}\n")
                
        except AssertionError as e:
            self.errorList.append(str(e))
        except Exception as e:
            self.errorList.append(f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts}, min_shifts={min_shifts}) raised the error: {str(e)}")
        
        # Test 2 with Preference set 1:
        preferences =  [[0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
                        [1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
                        [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                        [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
                        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
                        [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                        [1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
                        [1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
                        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
                        [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0]]
        min_shifts = 5
        max_unwanted_shifts = 10
        sys_admins_per_night = 7
        expectingNone = False
        try:
            res = allocate(preferences, sys_admins_per_night, max_unwanted_shifts, min_shifts)
            # Validate output:
            if expectingNone:
                self.assertIsNone(res, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} should have returned None\nYour output was: {res}\n")
            else:
                # Check the min shifts of all workers:
                for i in range(len(res[0])):
                    self.assertLessEqual(min_shifts, sum(d[i] for d in res), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not meet the minimum shift requirement.\nYour output was: {res}\n")
                
                # Check the max unwanted shifts is not exceeded:
                for i in range(len(res[0])):
                    num_unwated = 0
                    for d in range(len(res)):
                        if preferences[d][i] == 0 and res[d][i]: num_unwated += 1
                    self.assertLessEqual(num_unwated, max_unwanted_shifts, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} exceeded the maximum unwanted shift requirement.\nYour output was: {res}\n")
                
                # Check the sys_admins per night:
                for d in range(len(res)):
                    self.assertEqual(sys_admins_per_night, sum(res[d]), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not match the sys_admins_per_night requirement.\nYour output was: {res}\n")
                
        except AssertionError as e:
            self.errorList.append(str(e))
        except Exception as e:
            self.errorList.append(f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts}, min_shifts={min_shifts}) raised the error: {str(e)}")
        
        # Test 3 with preference set 1:
        preferences =  [[0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
                        [1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
                        [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                        [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
                        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
                        [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                        [1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
                        [1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
                        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
                        [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0]]
        min_shifts = 5
        max_unwanted_shifts = 10
        sys_admins_per_night = 8
        expectingNone = True
        try:
            res = allocate(preferences, sys_admins_per_night, max_unwanted_shifts, min_shifts)
            # Validate output:
            if expectingNone:
                self.assertIsNone(res, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} should have returned None\nYour output was: {res}\n")
            else:
                # Check the min shifts of all workers:
                for i in range(len(res[0])):
                    self.assertLessEqual(min_shifts, sum(d[i] for d in res), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not meet the minimum shift requirement.\nYour output was: {res}\n")
                
                # Check the max unwanted shifts is not exceeded:
                for i in range(len(res[0])):
                    num_unwated = 0
                    for d in range(len(res)):
                        if preferences[d][i] == 0 and res[d][i]: num_unwated += 1
                    self.assertLessEqual(num_unwated, max_unwanted_shifts, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} exceeded the maximum unwanted shift requirement.\nYour output was: {res}\n")
                
                # Check the sys_admins per night:
                for d in range(len(res)):
                    self.assertEqual(sys_admins_per_night, sum(res[d]), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not match the sys_admins_per_night requirement.\nYour output was: {res}\n")
                
        except AssertionError as e:
            self.errorList.append(str(e))
        except Exception as e:
            self.errorList.append(f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts}, min_shifts={min_shifts}) raised the error: {str(e)}")
        
    
        # Test 4 with preference set 1:
        preferences =  [[0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
                        [1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
                        [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
                        [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                        [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
                        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
                        [0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
                        [0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
                        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                        [1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                        [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
                        [1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
                        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
                        [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
                        [1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0]]
        min_shifts = 5
        max_unwanted_shifts = 10
        sys_admins_per_night = 9
        expectingNone = True
        try:
            res = allocate(preferences, sys_admins_per_night, max_unwanted_shifts, min_shifts)
            # Validate output:
            if expectingNone:
                self.assertIsNone(res, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} should have returned None\nYour output was: {res}\n")
            else:
                # Check the min shifts of all workers:
                for i in range(len(res[0])):
                    self.assertLessEqual(min_shifts, sum(d[i] for d in res), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not meet the minimum shift requirement.\nYour output was: {res}\n")
                
                # Check the max unwanted shifts is not exceeded:
                for i in range(len(res[0])):
                    num_unwated = 0
                    for d in range(len(res)):
                        if preferences[d][i] == 0 and res[d][i]: num_unwated += 1
                    self.assertLessEqual(num_unwated, max_unwanted_shifts, msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} exceeded the maximum unwanted shift requirement.\nYour output was: {res}\n")
                
                # Check the sys_admins per night:
                for d in range(len(res)):
                    self.assertEqual(sys_admins_per_night, sum(res[d]), msg=f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts} did not match the sys_admins_per_night requirement.\nYour output was: {res}\n")
                
        except AssertionError as e:
            self.errorList.append(str(e))
        except Exception as e:
            self.errorList.append(f"allocate(preferences=preference set #1, sys_admins_per_night={sys_admins_per_night}, max_unwanted_shifts={max_unwanted_shifts}, min_shifts={min_shifts}) raised the error: {str(e)}")
