def best_revenue(revenue, travel_days, start):
    total_revenue = 0
    numCity = len(revenue[0])    #numColumn
    numDays= len(revenue) #numRow
    dp = [-1]*numCity
    findBestRevenue(revenue, travel_days, start, numDays, total_revenue, dp)


def findBestRevenue(revenue, travel_days, start, numDays, total_revenue, dp):
    if start == numDays:
        return total_revenue
    max = 0
    if dp[start] != -1:
        return dp[start]
    for day in travel_days[start]:
        if travel_days[start][day] != -1:
            if revenue[start][day] + findBestRevenue(revenue, travel_days, start + travel_days[start][day], numDays, total_revenue, dp) > findBestRevenue(revenue, travel_days, start + travel_days[start][day] - 1, numDays, total_revenue, dp):
                max = revenue[start][day] + findBestRevenue(revenue, travel_days, start + travel_days[start][day], numDays, total_revenue, dp)
            else:
                max = findBestRevenue(revenue, travel_days, start + travel_days[start][day] - 1, numDays, total_revenue, dp)
        else:
            max = findBestRevenue(revenue, travel_days, start + travel_days[start][day] - 1, numDays, total_revenue, dp)
    dp[start] = max
    return dp[start]

if __name__ == '__main__':
    #         city:  0   1   2    # city:
    travel_days = [[-1,  1,  1],  # 0
                [ 1, -1,  1],  # 1
                [ 1,  2, -1]]  # 2
    #     city: 0  1    2     # day:
    revenue = [[1, 2,   1],   # 0
            [3, 3,   1],   # 1
            [3, 4,   1],   # 1
            [1, 1, 100]]   # 2
    start = 0
    best_revenue(revenue, travel_days, start)
