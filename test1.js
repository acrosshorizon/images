class SuffixTree(object):
    
    class Node(object):
        def __init__(self, lab):
            self.lab = lab # label on path leading to this node
            self.out = {}  # outgoing edges; maps characters to nodes

        def __str__(self):
            print("Label: ", self.lab, "\t OUT: ", self.out)
    
    def __init__(self, s):
        """ Make suffix tree, without suffix links, from s in quadratic time
            and linear space """
        s += '$'
        self.root = self.Node('*')
        self.root.out[s[0]] = self.Node(s) # trie for just longest suf
        print(self.root.__str__())
        # add the rest of the suffixes, from longest to shortest
        for i in range(1, len(s)):
            print("Index: ", i)
            # start at root; we’ll walk down as far as we can go
            cur = self.root
            j = i
            while j < len(s):
                if s[j] in cur.out:
                    print("run While-IF 1")
                    child = cur.out[s[j]]
                    lab = child.lab
                    print("child now is: ", lab)
                    # Walk along edge until we exhaust edge label or
                    # until we mismatch
                    k = j+1 
                    while k-j < len(lab) and s[k] == lab[k-j]:
                        print("k = ", k, "\tj = ", j)
                        print("k - j = ", k - j, "\ts[k] = ", s[k], "lab[k - j]= ", lab[k-j])
                        print("Update k")
                        k += 1
                    if k-j == len(lab):
                        print("run While-IF 2")
                        cur = child # we exhausted the edge
                        j = k
                        print("cur now: ", cur.lab)
                    else:
                        print("run While-ELSE 2")
                        # we fell off in middle of edge
                        #cExist = child node exist , cNew = new child node
                        cExist, cNew = lab[k-j], s[k]
                        print("cExist: ", cExist, "\tcNew: ", cNew)
                        # create “mid”: new node bisecting edge
                        # @delete: create new edge node for existing child
                        #mid keep the whole branch to the current node branch need to split
                        mid = self.Node(lab[:k-j])
                        print("mid: ", lab[:k-j])
                        #new branch add here
                        mid.out[cNew] = self.Node(s[k:])
                        print("mid.out[cNew] = ", s[k:])
                        # @delete: original child becomes mid’s child
                        # existing branch is split here
                        mid.out[cExist] = child
                        print("mid.out[cExist] = ", child.lab)
                        # assign new label for existing split branch
                        child.lab = lab[k-j:]
                        print("child.lab now is: ", lab[k-j:])
                        # assign new label for parent branch when it is split by existing branch with new branch
                        cur.out[s[j]] = mid
                        print("cur out[s[j]]: ", s[j], ": ", mid.lab)
                else:
                    print("run While-ELSE 1")
                    # Fell off tree at a node: make new edge hanging off it
                    cur.out[s[j]] = self.Node(s[j:])
                print(cur.__str__())
                print("End big-while")
            print(cur.__str__())
            print("End for")


    def followPath(self, s):
        """ Follow path given by s.  If we fall off tree, return None.  If we
            finish mid-edge, return (node, offset) where 'node' is child and
            'offset' is label offset.  If we finish on a node, return (node,
            None). """
        cur = self.root
        i = 0
        while i < len(s):
            c = s[i]
            if c not in cur.out:
                return (None, None) # fell off at a node
            child = cur.out[s[i]]
            lab = child.lab
            j = i+1
            while j-i < len(lab) and j < len(s) and s[j] == lab[j-i]:
                j += 1
            if j-i == len(lab):
                cur = child # exhausted edge
                i = j
            elif j == len(s):
                return (child, j-i) # exhausted query string in middle of edge
            else:
                return (None, None) # fell off in the middle of the edge
        return (cur, None) # exhausted query string at internal node

    def hasSubstring(self, s):
        """ Return true iff s appears as a substring """
        node, off = self.followPath(s)
        return node is not None




if __name__ == '__main__':
    tree = SuffixTree("banana")
    print(tree.hasSubstring("e"))
