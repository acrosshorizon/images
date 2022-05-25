Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>}
None
Index:  1
run While-ELSE 1
Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>, 'a': <__main__.SuffixTree.Node object at 0x10de22670>}
None
End big-while
run While-IF 1
child now is:  anana$
k =  2 	j =  1
k - j =  1 	s[k] =  n lab[k - j]=  n
Update k
k =  3 	j =  1
k - j =  2 	s[k] =  a lab[k - j]=  a
Update k
k =  4 	j =  1
k - j =  3 	s[k] =  n lab[k - j]=  n
Update k
k =  5 	j =  1
k - j =  4 	s[k] =  a lab[k - j]=  a
Update k
k =  6 	j =  1
k - j =  5 	s[k] =  $ lab[k - j]=  $
Update k
run While-IF 2
cur now:  anana$
Label:  anana$ 	 OUT:  {}
None
End big-while
Label:  anana$ 	 OUT:  {}
None
End for
Index:  2
run While-ELSE 1
Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>, 'a': <__main__.SuffixTree.Node object at 0x10de22670>, 'n': <__main__.SuffixTree.Node object at 0x10de22880>}
None
End big-while
run While-IF 1
child now is:  nana$
k =  3 	j =  2
k - j =  1 	s[k] =  a lab[k - j]=  a
Update k
k =  4 	j =  2
k - j =  2 	s[k] =  n lab[k - j]=  n
Update k
k =  5 	j =  2
k - j =  3 	s[k] =  a lab[k - j]=  a
Update k
k =  6 	j =  2
k - j =  4 	s[k] =  $ lab[k - j]=  $
Update k
run While-IF 2
cur now:  nana$
Label:  nana$ 	 OUT:  {}
None
End big-while
Label:  nana$ 	 OUT:  {}
None
End for
Index:  3
run While-IF 1
child now is:  anana$
k =  4 	j =  3
k - j =  1 	s[k] =  n lab[k - j]=  n
Update k
k =  5 	j =  3
k - j =  2 	s[k] =  a lab[k - j]=  a
Update k
run While-ELSE 2
cExist:  n 	cNew:  $
mid:  ana
mid.out[cNew] =  $
mid.out[cExist] =  anana$
child.lab now is:  na$
cur out[s[j]]:  a :  ana
Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>, 'a': <__main__.SuffixTree.Node object at 0x10de228e0>, 'n': <__main__.SuffixTree.Node object at 0x10de22880>}
None
End big-while
run While-IF 1
child now is:  ana
k =  4 	j =  3
k - j =  1 	s[k] =  n lab[k - j]=  n
Update k
k =  5 	j =  3
k - j =  2 	s[k] =  a lab[k - j]=  a
Update k
run While-IF 2
cur now:  ana
Label:  ana 	 OUT:  {'$': <__main__.SuffixTree.Node object at 0x10de22940>, 'n': <__main__.SuffixTree.Node object at 0x10de22670>}
None
End big-while
run While-IF 1
child now is:  $
run While-IF 2
cur now:  $
Label:  $ 	 OUT:  {}
None
End big-while
Label:  $ 	 OUT:  {}
None
End for
Index:  4
run While-IF 1
child now is:  nana$
k =  5 	j =  4
k - j =  1 	s[k] =  a lab[k - j]=  a
Update k
run While-ELSE 2
cExist:  n 	cNew:  $
mid:  na
mid.out[cNew] =  $
mid.out[cExist] =  nana$
child.lab now is:  na$
cur out[s[j]]:  n :  na
Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>, 'a': <__main__.SuffixTree.Node object at 0x10de228e0>, 'n': <__main__.SuffixTree.Node object at 0x10de229a0>}
None
End big-while
run While-IF 1
child now is:  na
k =  5 	j =  4
k - j =  1 	s[k] =  a lab[k - j]=  a
Update k
run While-IF 2
cur now:  na
Label:  na 	 OUT:  {'$': <__main__.SuffixTree.Node object at 0x10de22a00>, 'n': <__main__.SuffixTree.Node object at 0x10de22880>}
None
End big-while
run While-IF 1
child now is:  $
run While-IF 2
cur now:  $
Label:  $ 	 OUT:  {}
None
End big-while
Label:  $ 	 OUT:  {}
None
End for
Index:  5
run While-IF 1
child now is:  ana
run While-ELSE 2
cExist:  n 	cNew:  $
mid:  a
mid.out[cNew] =  $
mid.out[cExist] =  ana
child.lab now is:  na
cur out[s[j]]:  a :  a
Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>, 'a': <__main__.SuffixTree.Node object at 0x10de22a60>, 'n': <__main__.SuffixTree.Node object at 0x10de229a0>}
None
End big-while
run While-IF 1
child now is:  a
run While-IF 2
cur now:  a
Label:  a 	 OUT:  {'$': <__main__.SuffixTree.Node object at 0x10de22af0>, 'n': <__main__.SuffixTree.Node object at 0x10de228e0>}
None
End big-while
run While-IF 1
child now is:  $
run While-IF 2
cur now:  $
Label:  $ 	 OUT:  {}
None
End big-while
Label:  $ 	 OUT:  {}
None
End for
Index:  6
run While-ELSE 1
Label:  * 	 OUT:  {'b': <__main__.SuffixTree.Node object at 0x10de22520>, 'a': <__main__.SuffixTree.Node object at 0x10de22a60>, 'n': <__main__.SuffixTree.Node object at 0x10de229a0>, '$': <__main__.SuffixTree.Node object at 0x10de22b20>}
None
End big-while
run While-IF 1
child now is:  $
run While-IF 2
cur now:  $
Label:  $ 	 OUT:  {}
None
End big-while
Label:  $ 	 OUT:  {}
None
End for
False

Process finished with exit code 0
