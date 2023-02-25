(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{274:function(t,s,a){t.exports=a.p+"assets/img/image-20221112001702342.94afee7e.png"},275:function(t,s,a){t.exports=a.p+"assets/img/image-20221112100831245.0f2dd3e0.png"},276:function(t,s,a){t.exports=a.p+"assets/img/image-20221112101041533.f7fb7357.png"},277:function(t,s,a){t.exports=a.p+"assets/img/image-20221112105602568.a5583f14.png"},278:function(t,s,a){t.exports=a.p+"assets/img/image-20221112110106961.7a3c4f00.png"},524:function(t,s,a){"use strict";a.r(s);var n=a(14),v=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("h2",{attrs:{id:"一、git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、git"}},[t._v("#")]),t._v(" 一、Git")]),t._v(" "),s("h3",{attrs:{id:"_1-1概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1概述"}},[t._v("#")]),t._v(" 1.1概述")]),t._v(" "),s("p",[t._v("git是一个免费的、开源的"),s("strong",[t._v("分布式版本控制系统")]),t._v("，可以快速高效地处理从小型到大型的各种项目。")]),t._v(" "),s("p",[t._v("Git 易于学习，占地面积小，性能极快。 它具有廉价的本地库（磁盘），方便的暂存区域和多个工作流分支等特性。其性能优于 Subversion、CVS、Perforce 和 ClearCase 等版本控制工具。")]),t._v(" "),s("h3",{attrs:{id:"_1-2版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2版本控制"}},[t._v("#")]),t._v(" 1.2版本控制")]),t._v(" "),s("p",[t._v("版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。")]),t._v(" "),s("p",[t._v("版本控制其实最重要的是可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。")]),t._v(" "),s("p",[s("strong",[t._v("为什么需要版本控制")])]),t._v(" "),s("p",[t._v("个人开发过渡到团队协作。 因为当两人同时修改时，可能会有冲突，所以需要专业的版本控制工具。")]),t._v(" "),s("p",[s("strong",[t._v("版本控制工具：")])]),t._v(" "),s("p",[t._v("➢ "),s("strong",[t._v("集中式版本控制工具")])]),t._v(" "),s("p",[t._v("CVS、"),s("strong",[t._v("SVN(Subversion)")]),t._v("、VSS……")]),t._v(" "),s("p",[t._v("集中化的版本控制系统诸如 CVS、SVN 等，都有一个"),s("strong",[t._v("单一的集中管理的服务器")]),t._v("，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。")]),t._v(" "),s("p",[t._v("多年以来，这已成为版本控制系统的标准做法。这种做法带来了许多好处，每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个集中化的版本控制系统，要远比在各个客户端上维护本地数据库来得轻松容易。")]),t._v(" "),s("p",[t._v("事分两面，有好有坏。这么做显而易见的缺点是中央服务器的单点故障。如果服务器宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。")]),t._v(" "),s("p",[t._v("➢ "),s("strong",[t._v("分布式版本控制工具")])]),t._v(" "),s("p",[s("strong",[t._v("Git")]),t._v("、Mercurial、Bazaar、Darcs……")]),t._v(" "),s("p",[t._v("像 Git 这种分布式版本控制工具，客户端提取的不是最新版本的文件快照，而是把代码仓库完整地镜像下来（本地库）。这样任何一处协同工作用的文件发生故障，事后都可以用其他客户端的本地仓库进行恢复。因为每个客户端的每一次文件提取操作，实际上都是一次对整个文件仓库的完整备份。")]),t._v(" "),s("p",[t._v("分布式的版本控制系统出现之后,解决了集中式版本控制系统的缺陷:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("服务器断网的情况下也可以进行开发（因为版本控制是在本地进行的）")])]),t._v(" "),s("li",[s("p",[t._v("每个客户端保存的也都是整个完整的项目（包含历史记录，更加安全）")])])]),t._v(" "),s("h3",{attrs:{id:"_1-3git简史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3git简史"}},[t._v("#")]),t._v(" 1.3Git简史")]),t._v(" "),s("p",[s("strong",[t._v("Git")]),t._v(" "),s("strong",[t._v("工作机制")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(274),alt:"image-20221112001702342"}})]),t._v(" "),s("p",[t._v("工作区：代码存放磁盘的位置。")]),t._v(" "),s("p",[t._v("暂存区：为了让git知道这份代码，把这份代码添加到暂存区。（代码也可以删掉）")]),t._v(" "),s("p",[t._v("本地库：把暂存区的代码提交本地库，会生成历史版本，此时代码就删不掉了。（历史版本是删不掉的，除非直接删除本地库）")]),t._v(" "),s("p",[t._v("提交到本地库后，还可以把代码推送远程库（push)")]),t._v(" "),s("p",[s("strong",[t._v("Git")]),t._v(" "),s("strong",[t._v("和代码托管中心")])]),t._v(" "),s("p",[t._v("代码托管中心是基于网络服务器的远程代码仓库，一般我们简单称为"),s("strong",[t._v("远程库")]),t._v("。")]),t._v(" "),s("p",[t._v("➢ "),s("strong",[t._v("局域网")])]),t._v(" "),s("p",[t._v("​\t✓ GitLab")]),t._v(" "),s("p",[t._v("➢ "),s("strong",[t._v("互联网")])]),t._v(" "),s("p",[t._v("​\t✓ GitHub（外网）")]),t._v(" "),s("p",[t._v("​\t✓ Gitee 码云（国内网站）")]),t._v(" "),s("h3",{attrs:{id:"_1-4、常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、常用命令"}},[t._v("#")]),t._v(" 1.4、常用命令")]),t._v(" "),s("p",[t._v("右键任意位置，在右键菜单里选择 Git Bash Here 即可打开 Git Bash 命令行终端。")]),t._v(" "),s("p",[t._v("在 Git Bash 终端里输入 git --version 查看 git 版本。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("命令名称")])]),t._v(" "),s("th",[s("strong",[t._v("作用")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("git config --global user.name 用户名")]),t._v(" "),s("td",[t._v("设置用户签名")])]),t._v(" "),s("tr",[s("td",[t._v("git config --global user.email 邮箱")]),t._v(" "),s("td",[t._v("设置用户签名（可以虚拟，与github无关，只是本地登录的账号,可以当作注册账号）")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("git init")])]),t._v(" "),s("td",[s("strong",[t._v("初始化本地库")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("git status")])]),t._v(" "),s("td",[s("strong",[t._v("查看本地库状态")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("git add 文件名")])]),t._v(" "),s("td",[s("strong",[t._v("添加到暂存区")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v('git commit -m "日志信息" 文件名')])]),t._v(" "),s("td",[s("strong",[t._v("提交到本地库")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("git reflog")])]),t._v(" "),s("td",[s("strong",[t._v("查看历史记录")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("git reset --hard 版本号")])]),t._v(" "),s("td",[s("strong",[t._v("版本穿梭")])])])])]),t._v(" "),s("p",[s("strong",[t._v("初始化本地库")])]),t._v(" "),s("p",[s("strong",[t._v("git init")]),t._v("。要让git管理这个目录，就要让git获得这个目录的管理权，即初始化它。")]),t._v(" "),s("p",[t._v("此时会在所在目录里新建.git文件夹，即git目录（本地库）。（为隐藏文件，要通过ll -a在命令行查看）")]),t._v(" "),s("p",[s("strong",[t._v("查看本地库状态")])]),t._v(" "),s("p",[s("strong",[t._v("git status")]),t._v("得到：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('On branch master//当前所在分支\nNo commits yet//目录没提交过，说明是个空的git库\nnothing to commit (create/copy files and use "git add" to track)//没有东西可以提交\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("注:在vim里yuy是复制，p是粘贴，：wq保存。在linux命令里用cat hello.txt查看内容。用tail -n 1 hello.txt查看最后一行内容。")]),t._v(" "),s("p",[t._v("新增文件后。git status")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('On branch master\nNo commits yet//还是没提交过任何东西\nUntracked files://未被追踪的文件\n (use "git add <file>..." to include in what will be committed)\n hello.txt//虽然有了，但只存在于工作区,git还从未追踪过文件\nnothing added to commit but untracked files present (use "git add" to track) //需要用该命令追踪该文件，即添加到暂存区。\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("strong",[t._v("将工作区的文件添加到暂存区")])]),t._v(" "),s("p",[s("strong",[t._v("git")]),t._v(" "),s("strong",[t._v("add")]),t._v(" "),s("strong",[t._v("文件名")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("warning: LF will be replaced by CRLF in hello.txt.//自动将window和行末换行符变成linux的行末换行符lf。\n\nThe file will have its original line endings in your working directory.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("git status")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('On branch master\nNo commits yet//未提交\nChanges to be committed:\n (use "git rm --cached <file>..." to unstage)\n new file: hello.txt//已经追踪到文件了，文件已经存在于暂存区了。可以用git rm --cashed file来删掉，只是把暂存区的文件删掉\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("strong",[t._v("将暂存区的文件提交到本地库")])]),t._v(" "),s("p",[s("strong",[t._v('git commit  -m "日志信息(如first commit/第一次提交)"  文件')])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git commit -m "my first commit" hello.txt\nwarning: LF will be replaced by CRLF in hello.txt.\n\nThe file will have its original line endings in your working directory.\n\n[master (root-commit)86366fa(这7位是版本号，即首次提交的历史版本号)]first commit//有一个文件被提交\n1 file changed, 16 insertions(+)//一个文件被改变，16行内容被插入\ncreate mode 100644 hello.txt\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("strong",[t._v("git status")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("On branch master\nnothing to commit, working tree clean //没有东西需要提交，工作区是干净的，即提交本地库成功了。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("git reflog查看历史版本信息")])]),t._v(" "),s("p",[s("strong",[t._v("git log详细日志：不仅可以查看版本，也可以查看谁什么时候提交了版本。")])]),t._v(" "),s("p",[s("strong",[t._v("修改文件（hello.txt）")])]),t._v(" "),s("p",[s("strong",[t._v("查看状态（会检测到工作区有文件被修改）")])]),t._v(" "),s("p",[s("strong",[t._v("git status")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('On branch master\nChanges not staged for commit:\n (use "git add <file>..." to update what will be committed)\n (use "git checkout -- <file>..." to discard changes in working directory)\n\n modified: hello.txt//工作区的文件被修改了，红色表示修改的文件还未提交暂存区；添加暂存区后，会显示被修改，绿色表示已经到暂存区，还未提交本地库；提交本地库后，状态就又变working tree clean了。\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("strong",[t._v("再次提交后查看历史版本")])]),t._v(" "),s("p",[s("strong",[t._v("git reflog")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("087a1a7 (HEAD -> master) HEAD@{0}: commit: my third commit//此时指针指向第2个版本，此时查看文件时显示的是第2个版本的。\nca8ded6 @{1}: commit: my second commit\n86366fa HEAD@{2}: commit (initial): my first commit//有两个版本了\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("版本穿梭")])]),t._v(" "),s("p",[s("strong",[t._v("git reset --hard")]),t._v(" "),s("strong",[t._v("版本号")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git reset --hard 86366fa\nHEAD is now at 86366fa my first commit\n\n\ngit reflog\n86366fa (HEAD -> master) HEAD@{0}: reset: moving to 86366fa//已经变成了最开始的版本。\n087a1a7 HEAD@{1}: commit: my third commit\nca8ded6 HEAD@{2}: commit: my second commit\n86366fa (HEAD -> master) HEAD@{3}: commit (initial): my first commit然后查看文件 hello.txt，发现文件内容已经变化(cat hello.txt和在文件夹里点开的都是变化的，所以应该是指工作区的文件内容的转化)\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("文件夹.git里的head文件里有写当面的分支。")]),t._v(" "),s("p",[t._v(".git—refs—heads—master里面记录了当前指向的版本号。")]),t._v(" "),s("h3",{attrs:{id:"_1-5git-分支操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5git-分支操作"}},[t._v("#")]),t._v(" 1.5"),s("strong",[t._v("Git")]),t._v(" "),s("strong",[t._v("分支操作")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(275),alt:"image-20221112100831245"}})]),t._v(" "),s("p",[s("strong",[t._v("分支")])]),t._v(" "),s("p",[t._v("在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候，不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实也是指针的引用）")]),t._v(" "),s("p",[s("img",{attrs:{src:a(276),alt:"image-20221112101041533"}}),s("strong",[t._v("分支的好处")]),t._v("：")]),t._v(" "),s("p",[t._v("同时并行推进多个功能开发，提高开发效率。")]),t._v(" "),s("p",[t._v("各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。")]),t._v(" "),s("p",[s("strong",[t._v("分支的操作")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("命令名称")])]),t._v(" "),s("th",[s("strong",[t._v("作用")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("git branch 分支名")]),t._v(" "),s("td",[t._v("创建分支。")])]),t._v(" "),s("tr",[s("td",[t._v("git branch -v")]),t._v(" "),s("td",[t._v("查看分支")])]),t._v(" "),s("tr",[s("td",[t._v("git checkout 分支名")]),t._v(" "),s("td",[t._v("切换分支")])]),t._v(" "),s("tr",[s("td",[t._v("git merge 分支名")]),t._v(" "),s("td",[t._v("把指定的分支合并到当前分支上")])])])]),t._v(" "),s("p",[s("strong",[t._v("查看分支")])]),t._v(" "),s("p",[t._v("**git branch -v")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\\* master 087a1a7 my third commit （*代表当前所在的分区）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("创建分支")])]),t._v(" "),s("p",[s("strong",[t._v("git branch hot-fix")])]),t._v(" "),s("p",[s("strong",[t._v("git branch -v")]),t._v("此时已经有两个分支了,但当前分支还是master")]),t._v(" "),s("p",[s("strong",[t._v("切换分支")])]),t._v(" "),s("p",[s("strong",[t._v("git checkout hot-fix")])]),t._v(" "),s("p",[t._v("在hot-fix上修改代码hello.txt")]),t._v(" "),s("p",[s("strong",[t._v("git status")]),t._v("显示有修改的文件需要添加到暂存区和提交本地库。")]),t._v(" "),s("p",[t._v("修改提交后，此时在该分支的该版本打开的文件内容已经修改了。")]),t._v(" "),s("p",[s("strong",[t._v("git branch -v")]),t._v("显示head指向了hot-fix的最新提交版本。（在这里是master和分支的版本都有显示的）")]),t._v(" "),s("p",[s("strong",[t._v("合并分支")])]),t._v(" "),s("p",[s("strong",[t._v("切换加master分支 git checkout master")]),t._v("(此时指针重新指回了master分支上)")]),t._v(" "),s("p",[s("strong",[t._v("git merge hot-fix")]),t._v("//把hot-fix合并到当前的master分支上。")]),t._v(" "),s("p",[s("strong",[t._v("产生冲突")])]),t._v(" "),s("p",[t._v("冲突产生的表现：后面状态为 MERGING（正在合并中）。因为在master里修改版本的同时,在hot-fix里也修改版本，并同步到master里，此时同步的不是在master当前版本上修改的，两个修改都是在前一个版本上修改的，所以会出现冲突。")]),t._v(" "),s("p",[t._v("查看文件")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cat hello.txt\nhello git! hello atguigu! 2222222222222\nhello git! hello atguigu! 3333333333333\nhello git! hello atguigu!\n<<<<<<< HEAD\nhello git! hello atguigu! master test\nhello git! hello atguigu!//当前分支代码\n=======\nhello git! hello atguigu!\nhello git! hello atguigu! hot-fix test//要合并代码\n\\>>>>>>> hot-fix\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[s("strong",[t._v("冲突产生的原因：")])]),t._v(" "),s("p",[t._v("合并分支时，两个分支在"),s("strong",[t._v("同一个文件的同一个位置")]),t._v("有两套完全不同的修改。Git 无法替我们决定使用哪一个。必须"),s("strong",[t._v("人为决定")]),t._v("新代码内容。")]),t._v(" "),s("p",[s("strong",[t._v("查看状态")]),t._v("（检测到有文件有两处修改）")]),t._v(" "),s("p",[s("strong",[t._v("git status")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('On branch master\nYou have unmerged paths.\n (fix conflicts and run "git commit")\n (use "git merge --abort" to abort the merge)\nUnmerged paths:\n (use "git add <file>..." to mark resolution)\n both modified: hello.txt//两个都修改了，所以git不敢自动合并，要手动合并，才能保存到暂存区和本地库中。\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("strong",[t._v("解决冲突")])]),t._v(" "),s("p",[t._v("1）编辑有冲突的文件，删除特殊符号，决定要使用的内容")]),t._v(" "),s("p",[t._v("特殊符号：<<<<<<< HEAD 当前分支的代码 "),s("code",[t._v("=======")]),t._v(" 合并过来的代码 >>>>>>> hot-fix")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hello git! hello atguigu! 2222222222222\nhello git! hello atguigu! 3333333333333\nhello git! hello atguigu! \nhello git! hello atguigu!\nhello git! hello atguigu!\nhello git! hello atguigu! master test\nhello git! hello atguigu! hot-fix test//手动合并\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("2）添加到暂存区")]),t._v(" "),s("p",[s("strong",[t._v("git add hello.txt")])]),t._v(" "),s("p",[t._v("3）执行提交（注意：此时使用 git commit 命令时"),s("strong",[t._v("不能带文件名")]),t._v("）")]),t._v(" "),s("p",[t._v('**git commit -m "日志"**此时master后面已经没有merging了，合并成功了。合并的只是master分支里的内容，hot-fix里的内容是不会修改的。')]),t._v(" "),s("p",[s("strong",[t._v("Git")]),t._v(" "),s("strong",[t._v("团队协作机制")])]),t._v(" "),s("p",[s("strong",[t._v("团队内协作")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(277),alt:"image-20221112105602568"}})]),t._v(" "),s("p",[s("strong",[t._v("跨团队协作")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(278),alt:"image-20221112110106961"}})]),t._v(" "),s("h2",{attrs:{id:"二、github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、github"}},[t._v("#")]),t._v(" 二、GitHub")]),t._v(" "),s("h3",{attrs:{id:"_2-1github-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1github-操作"}},[t._v("#")]),t._v(" 2.1"),s("strong",[t._v("GitHub")]),t._v(" "),s("strong",[t._v("操作")])]),t._v(" "),s("p",[t._v("GitHub 网址：https://github.com/")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("账号")]),t._v(" "),s("th",[t._v("姓名")]),t._v(" "),s("th",[t._v("验证邮箱")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("atguiguyueyue")]),t._v(" "),s("td",[t._v("岳不群")]),t._v(" "),s("td",[t._v("atguiguyueyue@aliyun.com")])]),t._v(" "),s("tr",[s("td",[t._v("atguigulinghuchong")]),t._v(" "),s("td",[t._v("令狐冲")]),t._v(" "),s("td",[t._v("atguigulinghuchong@163.com")])]),t._v(" "),s("tr",[s("td",[t._v("atguigudongfang1")]),t._v(" "),s("td",[t._v("东方不败")]),t._v(" "),s("td",[t._v("atguigudongfang@163.com")])])])]),t._v(" "),s("p",[s("strong",[t._v("创建远程仓库")])]),t._v(" "),s("p",[t._v("add repository——Repository name写远程库的名字（最好和本地库的名字一样）——选择公共库(R读权限完全放开）/私人库（不能超过5个人，不然收费）——点击创建。")]),t._v(" "),s("p",[t._v("此时有两种链接形式（远程地址）：https/ssh。")]),t._v(" "),s("p",[s("strong",[t._v("远程仓库操作")])]),t._v(" "),s("p",[s("strong",[t._v("git remote -v")]),t._v(" 查看当前所有远程地址别名")]),t._v(" "),s("p",[s("strong",[t._v("git remote add 远程库别名（最好与库名保持一致） 远程地址")]),t._v("             起别名")]),t._v(" "),s("p",[s("strong",[t._v("git remote -v")]),t._v(" 查看到当前有2个别名（fetch拉取、push推送）")]),t._v(" "),s("p",[s("strong",[t._v("git push 别名 分支")]),t._v(" 推送本地分支上的内容到远程仓库")]),t._v(" "),s("p",[t._v("此时也可以在github里手动更改代码，并提交。此时本地库的代码就和远程库不一样了，要更新本地库的代码。")]),t._v(" "),s("p",[s("strong",[t._v("git pull 远程库地址别名 远程分支名")]),t._v(" 将远程仓库对于分支最新内容拉下来后与当前本地分支直接合并，并自动提交本地库。")]),t._v(" "),s("p",[s("strong",[t._v("git clone 远程地址")]),t._v(" 将远程仓库的内容克隆到本地。克隆不需要登录任何账号，因为克隆的公共库读权限不受限制。会做三件事：1、摘取代码。2、初始化本地库。3、对克隆的远程库创建别名origin。")]),t._v(" "),s("p",[s("strong",[t._v("邀请加入团队")])]),t._v(" "),s("p",[s("strong",[t._v("1）选择邀请合作者")])]),t._v(" "),s("p",[s("strong",[t._v("2）填入想要合作的人")])]),t._v(" "),s("p",[s("strong",[t._v("3 ） 复 制 地 址 并 通 过 微 信 钉 钉 等 方 式 发 送 给 该 用 户 ，")])]),t._v(" "),s("p",[t._v("setting-manage access - invite a collaborator-输入要邀请用户的用户名—邀请—复制邀请函。")]),t._v(" "),s("p",[s("strong",[t._v("4）在 atguigulinghuchong")]),t._v(" "),s("strong",[t._v("这个账号中的地址栏复制收到邀请的链接，点击接受邀请。")])]),t._v(" "),s("p",[s("strong",[t._v("5）成功之后可以在")]),t._v(" "),s("strong",[t._v("atguigulinghuchong")]),t._v(" "),s("strong",[t._v("这个账号上看到")]),t._v(" "),s("strong",[t._v("git-Test")]),t._v(" "),s("strong",[t._v("的远程仓库。")])]),t._v(" "),s("p",[s("strong",[t._v("6）令狐冲可以修改内容并push到岳不群的远程仓库。git push origin master")])]),t._v(" "),s("p",[s("strong",[t._v("7）回到atguiguyueyue的GitHub远程仓库中可以看到，最后一次是")]),t._v(" "),s("strong",[t._v("lhc")]),t._v(" "),s("strong",[t._v("提交的。并拉取到自己的本地库，git pull git-demo master")])]),t._v(" "),s("p",[s("strong",[t._v("跨团队协作")])]),t._v(" "),s("p",[s("strong",[t._v("1）将远程仓库的地址复制发给邀请跨团队协作的人，比如东方不败。")])]),t._v(" "),s("p",[s("strong",[t._v("2）在东方不败的")]),t._v(" "),s("strong",[t._v("GitHub")]),t._v(" "),s("strong",[t._v("账号里的地址栏复制收到的链接，然后点击")]),t._v(" "),s("strong",[t._v("Fork")]),t._v(" "),s("strong",[t._v("将项目叉到自己的本地仓库。叉成功后可以在首页里看到当前仓库信息。")])]),t._v(" "),s("p",[s("strong",[t._v("3）东方不败就可以在线编辑叉取过来的文件。")])]),t._v(" "),s("p",[s("strong",[t._v("4）编辑完毕后，填写描述信息并点击左下角绿色按钮提交，提交也只是在自己叉过来的库中修改成功了。")])]),t._v(" "),s("p",[s("strong",[t._v("5）接下来点击上方的")]),t._v(" "),s("strong",[t._v("Pull Requests 拉取请求，并创建一个新的请求。")])]),t._v(" "),s("p",[t._v("new pull requests--create pull request—可以写一些话—cteate pull request.")]),t._v(" "),s("p",[s("strong",[t._v("6）回到岳岳 GitHub账号可以看到有一个")]),t._v(" "),s("strong",[t._v("Pull request请求。进入到聊天室，可以讨论代码相关内容。点击链接可以查看代码")])]),t._v(" "),s("p",[s("strong",[t._v("7）如果代码没有问题，可以点击")]),t._v(" "),s("strong",[t._v("Merge pull reque— Confirm Merging 合并代码。")])]),t._v(" "),s("p",[s("strong",[t._v("SSH")]),t._v(" "),s("strong",[t._v("免密登录")])]),t._v(" "),s("p",[t._v("我们可以看到远程仓库中还有一个 SSH 的地址，因此我们也可以使用 SSH 进行访问。")]),t._v(" "),s("p",[t._v("具体操作如下：")]),t._v(" "),s("p",[t._v("--进入当前用户的家目录")]),t._v(" "),s("p",[t._v("cd")]),t._v(" "),s("p",[t._v("--删除.ssh 目录")]),t._v(" "),s("p",[t._v("rm -rvf .ssh")]),t._v(" "),s("p",[t._v("removed '.ssh/known_hosts'")]),t._v(" "),s("p",[t._v("removed directory '.ssh'")]),t._v(" "),s("p",[t._v("--运行命令生成.ssh 秘钥目录[注意：这里-C 这个参数是大写的 C]")]),t._v(" "),s("p",[t._v("ssh-keygen -t rsa -C atguiguyueyue@aliyun.com//针对这个邮箱的密钥")]),t._v(" "),s("p",[t._v("--进入.ssh 目录查看文件列表")]),t._v(" "),s("p",[t._v("id_rsa私钥")]),t._v(" "),s("p",[t._v("id_rsa.pub公钥")]),t._v(" "),s("p",[t._v("复制 id_rsa.pub 文件内容，登录 GitHub，点击用户头像→Settings→SSH keys，输入笔记本的名字，和公钥。然后当前windows连接岳不群这个账号就不需要输入密码了。")]),t._v(" "),s("p",[t._v("接下来再往远程仓库 push /pull东西的时候"),s("strong",[t._v("使用 SSH 连接")]),t._v("就不需要登录了。")]),t._v(" "),s("h3",{attrs:{id:"_2-2idea-集成-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2idea-集成-git"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2.2IDEA")]),t._v(" "),s("strong",[t._v("集成")]),t._v(" "),s("strong",[t._v("Git")])]),t._v(" "),s("p",[t._v("也就是在不需要在文件里用命令行客户端，直接在idea里用git。")]),t._v(" "),s("p",[s("strong",[t._v("配置")]),t._v(" "),s("strong",[t._v("Git")]),t._v(" "),s("strong",[t._v("忽略文件")])]),t._v(" "),s("p",[t._v("如IDEA特定文件.imi文件。")]),t._v(" "),s("p",[s("strong",[t._v("问题1:为什么要忽略他们？")])]),t._v(" "),s("p",[t._v("答：与项目的实际功能无关，不参与服务器上部署运行。把它们忽略掉能够屏蔽 IDE 工具之")]),t._v(" "),s("p",[t._v("间的差异。")]),t._v(" "),s("p",[s("strong",[t._v("问题2：怎么忽略？")])]),t._v(" "),s("p",[t._v("1）创建忽略规则文件 xxxx.ignore（前缀名随便起，建议是 git.ignore）")]),t._v(" "),s("p",[t._v("这个文件的存放位置原则上在哪里都可以，为了便于让~/.gitconfig 文件引用，建议也放在用户家目录下")]),t._v(" "),s("p",[t._v("git.ignore 文件模版内容如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# Compiled class file\n*.class //所有的class文件都不要\n\n\\# Log file\n*.log//所有的.log文件都不要\n\n\\# BlueJ files\n*.ctxt\n\n\\# Mobile Tools for Java (J2ME)\n.mtj.tmp/\n\n\\# Package Files #\n*.jar\n*.war\n*.nar\n*.ear\n*.zip\n*.tar.gz\n*.rar\n\n\\# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml\nhs_err_pid*\n\n.classpath\n.project\n.settings\ntarget\n.idea\n*.iml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("p",[t._v("2）在.gitconfig 文件中引用忽略配置文件（此文件在 Windows 的家目录中）")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[user]\nname = Layne\nemail = Layne@atguigu.com\n[core]\n\texcludesfile = C:/Users/asus/git.ignore\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("注意：这里要使用“正斜线（/）”，不要使用“反斜线（\\）”")]),t._v(" "),s("p",[s("strong",[t._v("定位")]),t._v(" "),s("strong",[t._v("Git")]),t._v(" "),s("strong",[t._v("程序")])]),t._v(" "),s("p",[t._v("新建idea的maven项目，打开setting-版本控制—git—选择git的路径为git的安装目录下的bin的git.exe文件—test—确认。")]),t._v(" "),s("p",[s("strong",[t._v("初始化本地库")])]),t._v(" "),s("p",[t._v("点击VCS（version control setting)——import into version control——创建git本地 仓库——选择要创建 Git 本地仓库的工程。 表示这个目录已经完成git的初始化了，git已经接管了这个目录。此时文件路径中出现了.git文件，具文件里的pom.xml文件因为还未存进暂存区变成了红色。")]),t._v(" "),s("p",[s("strong",[t._v("添加到暂存区")])]),t._v(" "),s("p",[t._v("右键点击项目选择 Git -> Add 将项目添加到暂存区。此时文件名变绿了。")]),t._v(" "),s("p",[s("strong",[t._v("将整个项目添加进暂存区")])]),t._v(" "),s("p",[t._v("它会自动忽略.idea等忽略的文件，只将没上传暂存区的文件上传。")]),t._v(" "),s("p",[s("strong",[t._v("将整个项目提交本地库")])]),t._v(" "),s("p",[t._v("提交成功后，提交的文件就变黑了。")]),t._v(" "),s("p",[s("strong",[t._v("切换版本")])]),t._v(" "),s("p",[t._v("在 IDEA 的左下角，点击 Version Control，然后点击 Log 查看版本")]),t._v(" "),s("p",[t._v("右键选择要切换的版本，然后在菜单里点击 Checkout Revision（签出修订）。")]),t._v(" "),s("p",[t._v("//对蓝色的文件可以不用添加暂存区，已经已经跟踪过了，直接提交本地库就行了。")]),t._v(" "),s("p",[s("strong",[t._v("创建分支")])]),t._v(" "),s("p",[t._v("右键文件，选择 Git，在 Repository 里面，点击 Branches 按钮。")]),t._v(" "),s("p",[t._v("在弹出的 Git Branches 框里，点击 New Branch 按钮。/或直接点击右下角的master，再new branch。")]),t._v(" "),s("p",[t._v("填写分支名称，创建 hot-fix 分支。")]),t._v(" "),s("p",[t._v("然后再 IDEA 的右下角看到 hot-fix，说明分支创建成功，并且当前已经切换成 hot-fix 分支。")]),t._v(" "),s("p",[s("strong",[t._v("切换分支")])]),t._v(" "),s("p",[t._v("在 IDEA 窗口的右下角，切换到 master 分支。")]),t._v(" "),s("p",[t._v("然后在 IDEA 窗口的右下角看到了 master，说明 master 分支切换成功。")]),t._v(" "),s("p",[s("strong",[t._v("合并分支")])]),t._v(" "),s("p",[t._v("在 IDEA 窗口的右下角，将 hot-fix 分支合并到当前 master 分支（Merge into Current)。")]),t._v(" "),s("p",[t._v("如果代码没有冲突，分支直接合并成功，分支合并成功以后，代码自动提交，无需手动提交本地库。")]),t._v(" "),s("p",[s("strong",[t._v("解决冲突")])]),t._v(" "),s("p",[t._v("如果 master 分支和 hot-fix 分支都修改了代码，在合并分支的时候就会发生冲突。")]),t._v(" "),s("p",[t._v("我们现在站在 master 分支上合并 hot-fix 分支，就会发生代码冲突。")]),t._v(" "),s("p",[t._v("点击 Conflicts 框里的 Merge 按钮，进行手动合并代码。 手动合并完代码以后，点击右下角的 Apply 按钮。代码冲突解决，自动提交本地库。")]),t._v(" "),s("h3",{attrs:{id:"_2-3idea-集成-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3idea-集成-github"}},[t._v("#")]),t._v(" 2.3"),s("strong",[t._v("IDEA")]),t._v(" "),s("strong",[t._v("集成")]),t._v(" "),s("strong",[t._v("GitHub")])]),t._v(" "),s("p",[s("strong",[t._v("设置")]),t._v(" "),s("strong",[t._v("GitHub")]),t._v(" "),s("strong",[t._v("账号")])]),t._v(" "),s("p",[t._v("file-setting-version control -github-+-输入账号和密码-登录。")]),t._v(" "),s("p",[t._v("如果出现 401 等情况连接不上的，是因为网络原因，可以使用以下方式连接：")]),t._v(" "),s("p",[t._v("然后去 GitHub 账户中的settint-develop settings-personal access tokens(个人登录口令）上设置 token，输入密码，并给口令随便起个名字。 点击生成 token，然后权限全部勾上-生成-。复制红框中的字符串到 idea 中。点击登录。")]),t._v(" "),s("p",[s("strong",[t._v("分享工程到")]),t._v(" "),s("strong",[t._v("GitHub")])]),t._v(" "),s("p",[t._v("Git-Github-分享-输入远程库名字-输入别名（用库名就行了），来到 GitHub 中发现已经帮我们创建好了 gitTest 的远程仓库。")]),t._v(" "),s("p",[s("strong",[t._v("push")]),t._v(" "),s("strong",[t._v("推送本地库到远程库")])]),t._v(" "),s("p",[t._v("右键点击项目，可以将当前分支的内容 push 到 GitHub 的远程仓库中。默认是用https链接推送的，也可以换成ssh链接，点击别名就可以更换。")]),t._v(" "),s("p",[t._v("注意：push 是将本地库代码推送到远程库，如果本地库代码跟远程库代码版本不一致，push 的操作是会被拒绝的。也就是说，要想 push 成功，一定要保证本地库的版本要比远程库的版本高！因此一个成熟的程序员在动手改本地代码之前，一定会先检查下远程库跟本地代码的区别！如果本地的代码版本已经落后，切记要先 pull 拉取一下远程库的代码，将本地代码更新到最新以后，然后再修改，提交，推送！")]),t._v(" "),s("p",[s("strong",[t._v("pull")]),t._v(" "),s("strong",[t._v("拉取远程库到本地库")])]),t._v(" "),s("p",[t._v("可以先在github上更改一下代码，让远程版本高于本地，需要先pull再push。右键点击项目，可以将远程仓库的内容 pull 到本地仓库。")]),t._v(" "),s("p",[t._v("注意：pull 是拉取远端仓库代码到本地，如果远程库代码和本地库代码不一致，会自动合并，如果自动合并失败，还会涉及到手动解决冲突的问题。")]),t._v(" "),s("p",[s("strong",[t._v("clone")]),t._v(" "),s("strong",[t._v("克隆远程库到本地")])]),t._v(" "),s("p",[t._v("get from version control-选择git-输入链接-克隆。为 clone 下来的项目创建一个工程，然后点击 Next。//而且各种历史版本和分支也都存在。")]),t._v(" "),s("h2",{attrs:{id:"三、gitee码云-国内版的github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、gitee码云-国内版的github"}},[t._v("#")]),t._v(" 三、Gitee码云（国内版的GitHub)")]),t._v(" "),s("h3",{attrs:{id:"_3-1简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1简介"}},[t._v("#")]),t._v(" 3.1"),s("strong",[t._v("简介")])]),t._v(" "),s("p",[t._v("众所周知，GitHub 服务器在国外，使用 GitHub 作为项目托管网站，如果网速不好的话，严重影响使用体验，甚至会出现登录不上的情况。针对这个情况，大家也可以使用国内的项目托管网站-码云。")]),t._v(" "),s("p",[t._v("码云是"),s("strong",[t._v("开源中国")]),t._v("推出的基于 Git 的代码托管服务中心，网址是 https://gitee.com/ ，使用方式跟 GitHub 一样，而且它还是一个中文网站，如果你英文不是很好它是最好的选择。")]),t._v(" "),s("p",[s("strong",[t._v("码云帐号注册和登录")])]),t._v(" "),s("p",[t._v("进入码云官网地址：https://gitee.com/，点击注册 Gitee输入个人信息，进行注册即可。帐号注册成功以后，直接登录。 登录以后，就可以看到码云官网首页了。")]),t._v(" "),s("p",[s("strong",[t._v("码云创建远程库")])]),t._v(" "),s("p",[t._v("点击首页右上角的加号，选择下面的新建仓库填写仓库名称，路径和选择是否开源（共开库或私有库）最后根据需求选择分支模型，然后点击创建按钮。")]),t._v(" "),s("p",[t._v("远程库创建好以后，就可以看到 HTTPS 和 SSH 的链接。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-idea-集成码云"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-idea-集成码云"}},[t._v("#")]),t._v(" 3.2 "),s("strong",[t._v("IDEA")]),t._v(" "),s("strong",[t._v("集成码云")])]),t._v(" "),s("p",[s("strong",[t._v("IDEA")]),t._v(" "),s("strong",[t._v("安装码云插件")])]),t._v(" "),s("p",[t._v("Idea 默认不带码云插件，我们第一步要安装 Gitee 插件。")]),t._v(" "),s("p",[t._v("如图所示，在 Idea 插件商店搜索 Gitee，然后点击右侧的 Install 按钮。")]),t._v(" "),s("p",[t._v("Idea 链接码云和链接 GitHub 几乎一样，安装成功后，重启 Idea。")]),t._v(" "),s("p",[t._v("Idea 重启以后在 Version Control 设置里面看到 Gitee，说明码云插件安装成功。")]),t._v(" "),s("p",[t._v("然后在码云插件里面添加码云帐号，我们就可以用 Idea 连接码云了。")]),t._v(" "),s("p",[s("strong",[t._v("IDEA")]),t._v(" "),s("strong",[t._v("连接码云")])]),t._v(" "),s("p",[t._v("Idea 连接码云和连接 GitHub 几乎一样，首先在 Idea 里面创建一个工程，初始化 git 工")]),t._v(" "),s("p",[t._v("程，然后将代码添加到暂存区，提交到本地库，这些步骤上面已经讲过，此处不再赘述。")]),t._v(" "),s("p",[s("strong",[t._v("将本地代码")]),t._v(" "),s("strong",[t._v("push")]),t._v(" "),s("strong",[t._v("到码云远程库")])]),t._v(" "),s("p",[t._v("自定义远程库链接。")]),t._v(" "),s("p",[t._v("给远程库链接定义个 name，然后再 URL 里面填入码云远程库的 HTTPS 链接即可。码 云服务器在国内，用 HTTPS 链接即可，没必要用 SSH 免密链接。然后选择定义好的远程链接，点击 Push 即可。看到提示就说明 Push 远程库成功。 去码云远程库查看代码。")]),t._v(" "),s("p",[t._v("只要码云远程库链接定义好以后，对码云远程库进行 pull 和 clone 的操作和 Github 一致，此处不再赘述。")]),t._v(" "),s("h3",{attrs:{id:"_3-3码云复制-github-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3码云复制-github-项目"}},[t._v("#")]),t._v(" 3.3"),s("strong",[t._v("码云复制")]),t._v(" "),s("strong",[t._v("GitHub")]),t._v(" "),s("strong",[t._v("项目")])]),t._v(" "),s("p",[t._v("码云提供了直接复制 GitHub 项目的功能，方便我们做项目的迁移和下载。")]),t._v(" "),s("p",[t._v("具体操作如下：")]),t._v(" "),s("p",[t._v("将 GitHub 的远程库 HTTPS 链接复制过来，点击创建按钮即可。")]),t._v(" "),s("p",[t._v("如果 GitHub 项目更新了以后，在码云项目端可以手动重新同步，进行更新！")]),t._v(" "),s("h2",{attrs:{id:"四、自建代码托管平台gitlab-基于局域网的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、自建代码托管平台gitlab-基于局域网的"}},[t._v("#")]),t._v(" 四、自建代码托管平台GitLab（基于局域网的）")]),t._v(" "),s("h3",{attrs:{id:"_4-1gitlab简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1gitlab简介"}},[t._v("#")]),t._v(" 4.1GitLab简介")]),t._v(" "),s("p",[t._v("GitLab 是由 GitLabInc.开发，使用 MIT 许可证的基于网络的 Git 仓库管理工具，且具有wiki 和 issue 跟踪功能。使用 Git 作为代码管理工具，并在此基础上搭建起来的 web 服务。")]),t._v(" "),s("p",[t._v("GitLab 由乌克兰程序员DmitriyZaporozhets 和 ValerySizov 开发，它使用 Ruby 语言写成。后来，一些部分用 Go 语言重写。截止 2018 年 5 月，该公司约有 290 名团队成员，以及 2000 多名开源贡献者。GitLab 被 IBM，Sony，JülichResearchCenter，NASA，Alibaba，Invincea，O’ReillyMedia，Leibniz-Rechenzentrum(LRZ)，CERN，SpaceX 等组织使用。")]),t._v(" "),s("h3",{attrs:{id:"_4-2gitlab安装准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2gitlab安装准备"}},[t._v("#")]),t._v(" 4.2Gitlab安装准备")]),t._v(" "),s("p",[t._v("官网地址：https://about.gitlab.com/")]),t._v(" "),s("p",[t._v("安装说明：https://about.gitlab.com/installation/")]),t._v(" "),s("p",[t._v("b站视频最后。")]),t._v(" "),s("p",[t._v("git push "),s("a",{attrs:{href:"mailto:git@github.com"}},[t._v("git@github.com")]),t._v(":zhuangzhixi/zhuangzhixi.github.io.git --delete pages")]),t._v(" "),s("p",[t._v("npm run build")]),t._v(" "),s("p",[t._v("cd docs/.vuepress/dist")]),t._v(" "),s("p",[t._v("git init")]),t._v(" "),s("p",[t._v("git add -A")]),t._v(" "),s("p",[t._v("git commit -m 'first' -a")]),t._v(" "),s("p",[t._v("git branch pages")]),t._v(" "),s("p",[t._v("git push "),s("a",{attrs:{href:"mailto:git@github.com"}},[t._v("git@github.com")]),t._v(":zhuangzhixi/zhuangzhixi.github.io.git master:pages")])])}),[],!1,null,null,null);s.default=v.exports}}]);