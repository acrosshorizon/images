import math
global unwanted_shifts_taken, total_shift_taken, numdays, numSysAdmins

def allocate(preferences, sysadmins_per_night, max_unwanted_shifts, min_shifts):
    graph = []
    global unwanted_shifts_taken, total_shift_taken, numdays, numSysAdmins
    unwanted_shifts_taken = [0] * len(preferences[0])
    total_shift_taken = [0] * len(preferences[0])
    numdays = len(preferences)
    numSysAdmins = len(preferences[0])

    generateGraph(graph, preferences, sysadmins_per_night, max_unwanted_shifts)
    for x in graph:
        print(x, ", ")
    print("######################################################")

    ans = FordFulkerson(graph, 0, len(graph[0]) - 1, max_unwanted_shifts, min_shifts)
    print(ans)


def generateGraph(graph, preferences, sysadmins_per_night, max_unwanted_shifts):
    global unwanted_shifts_taken, total_shift_taken, numdays, numSysAdmins
    #print("numdays: ", numdays)
    #print("numSysAdmins: ", numSysAdmins)
    for i in range(2 * numSysAdmins + 2 + numdays):
        temp = []
        for j in range(2 * numSysAdmins + 2 + numdays):
            temp.append(0)
        graph.append(temp)

    # Initialize capacity from each day to sink by sysadmins_per_night
    for i in range(2 * numSysAdmins + 1, 2 * numSysAdmins + 1 + numdays):
        graph[i][2 * numSysAdmins + 1 + numdays] = sysadmins_per_night
    # Initialize capacity from source to each employee node of preferred working day by numdays
    for j in range(1, numSysAdmins + 1):
        graph[0][j] = numdays
    # #Initialize capacity from source to each employee node of non-preferred working day by max_unwanted_shifts
    for j in range(1 + numSysAdmins, 2 * numSysAdmins + 1):
        graph[0][j] = max_unwanted_shifts
    # Initilize capacity from each employee node of preferred working day to each day by 1
    for i in range(1, numSysAdmins + 1):
        for j in range(2 * numSysAdmins + 1, 2 * numSysAdmins + 1 + numdays):
            graph[i][j] = preferences[j - (2 * numSysAdmins + 1)][i - 1]
    # Initilize capacity from each employee node of non-preferred working day to each day by 1
    for i in range(1 + numSysAdmins, 2 * numSysAdmins + 1):
        for j in range(2 * numSysAdmins + 1, 2 * numSysAdmins + 1 + numdays):
            temp = 0
            if preferences[j - (2 * numSysAdmins + 1)][i - numSysAdmins - 1] == 0:
                temp = 1
            graph[i][j] = temp

def BFS(graph, s, t, parent, max_unwanted_shifts, min_shifts):
    global unwanted_shifts_taken, total_shift_taken, numdays, numSysAdmins
    visited = [False] * len(graph[0])
    q = []
    q.append(s)
    visited[s] = True

    while len(q) > 0:
        x = q[0]
        q.pop(0)
        for y in range(len(graph[0])):
            if visited[y] == False and graph[x][y] > 0:
                visited[y] = True
                parent[y] = x
                q.append(y)

    for x in graph:
        print(x)
    print("--------------------------------------------")
    return visited[t] == True

def FordFulkerson(graph, s ,t, max_unwanted_shifts, min_shifts):
    parent = [-1] * len(graph[0])
    sum = 0
    global unwanted_shifts_taken, total_shift_taken, numdays, numSysAdmins
    while BFS(graph, s, t, parent, max_unwanted_shifts, min_shifts):
        temp = math.inf
        y = t
        while y != s:
            x = parent[y]
            temp = min(temp, graph[x][y])
            if x != s:
                if x <= numSysAdmins:
                    #print("index preferred: ", x, "\ton day: ", y)
                    total_shift_taken[x - 1] += 1
                if x > numSysAdmins and x < 2 * numSysAdmins + 1:
                    #print("index unwanted: ", x, "\ton day: ", y)
                    unwanted_shifts_taken[x - (2 * numSysAdmins) - 1] += 1
                    total_shift_taken[x - (2 * numSysAdmins) - 1] += 1

            y = parent[y]

        y = t
        while y != s:
            x = parent[y]
            graph[x][y] -= temp
            graph[y][x] += temp
            y = parent[y]

        sum += temp
    print("---------------------------------------------------------")
    for x in graph:
        print(x)
    return sum






if __name__ == '__main__':
    preferences = [[0, 1, 0], [1, 0, 1], [0, 0, 1], [1, 1, 0]]
    sysadmins_per_night = 2
    max_unwanted_shifts = 2
    min_shifts = 1
    allocate(preferences, sysadmins_per_night, max_unwanted_shifts, min_shifts)
    global unwanted_shifts_taken, total_shift_taken
    print("Total: ", total_shift_taken)
    print("Shift: ", unwanted_shifts_taken)

