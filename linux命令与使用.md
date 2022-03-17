# 文件目录管理
```
ls 
#（英文全拼：list files）: 列出目录及文件名
cd
#（英文全拼：change directory）：切换目录
pwd
#（英文全拼：print work directory）：显示目前的目录
mkdir
#（英文全拼：make directory）：创建一个新的目录
rmdir
#（英文全拼：remove directory）：删除一个空的目录
cp
#（英文全拼：copy file）: 复制文件或目录
rm
#（英文全拼：remove）: 删除文件或目录
mv
#（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称
```

# 文件
```
>file 
<file 
#把程序的输入输出定向到文件

>> file
#追加内容

ls -l | tail -n1
#将一个命令的输出和一个命令的输入连接起来

sudo
#给命令提权

echo 3 | sudo tee emm
#在sudo下把输出定向到文件
```

```
cat  
#由第一行开始显示文件内容
tac  
#从最后一行开始显示，可以看出 tac 是 cat 的倒着写！
nl   
#显示的时候，顺道输出行号！
more 
#一页一页的显示文件内容
less 
#与 more 类似，但是比 more 更好的是，他可以往前翻页！
head 
#只看头几行
tail 
#只看尾巴几行
```


# 权限系统
