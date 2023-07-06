
# Guide

* [For Editors](#for-editors)
* [For Maintainers / Developers](#for-maintainers--developers)
* [How to Get Started](#how-to-get-started)
* [Markdown Style Guide](#markdown-style-guide)
  * [Headings](#headings)
  * [Paragraphs](#paragraphs)
  * [Line Breaks](#line-breaks)
  * [Emphasis (Bold / Italic)](#emphasis-bold--italic)
  * [Blockquotes](#blockquotes)
  * [Lists](#lists)
    * [Ordered Lists](#ordered-lists)
    * [Unordered Lists](#unordered-lists)
  * [Inline Code & Code Blocks](#inline-code--code-blocks)
  * [Horizontal Rules](#horizontal-rules)
  * [Links](#links)
    * [Reference-style Links](#reference-style-links)
    * [Footnotes](#footnotes)
  * [Images](#images)
  * [Tables](#tables)

This page is for editors/maintainers/developers of the website.
This page contains the coding style guide used in this project and some necessary basics.
Since most of the participants in this project are TA/students with technical backgrounds, the non-core parts of this guide will be directly put into relevant technical documents without detailed explanation.

## For Editors

> * Since the audience for this site is not necessarily native English speakers, **please use American English, but avoid idioms that may be difficult to understand by non-native speakers.**
> * Since the writer isn't necessarily a native English speaker either, please be inclusive and correct the grammar if you see it wrong, or revise it if you see a confusing expression.
> * Since the audience may be a novice without any technical background, please be as straightforward and detailed as possible to describe the step-by-step process, and avoid any potentially confusing expressions.

What you need to be familiar with before editing articles or content:

* [Markdown](https://www.markdownguide.org/)
  * (Optional) [HTML](https://www.w3schools.com/html/)
  * (Optional) [kramdown](https://kramdown.gettalong.org/index.html)
  * (Optional) [Jekyll > Layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/)
  * (Optional) [Docker](https://www.docker.com/)

Working directory description:

* `/docs/*` is your main working directory, where all articles and tutorials are located. How to create subdirectories, please master [Jekyll > Layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/) in the prerequisite knowledge. If you really can't, you can contact the maintainer/developer of the website.
* `/assets/images/*` is the collection of all image resources, please do not put the images in the article into other directories. Please collect pictures from the same article in the same folder as much as possible. Please try to use `png` or `svg` as the image format.

The writing of web pages is actually writing Markdown files. So you need to be familiar with the [basic syntax of Markdown](https://www.markdownguide.org/basic-syntax/).
In the meantime, please follow the [Markdown Style Guide](#markdown-style-guide) section in this tutorial to ensure project unity.

For simple modifications, you can write Markdown through GitHub's built-in editing capabilities.  
For newly added files, you can write and create files in GitHub via `Add file > Create new file` in GitHub. Or you can write Markdown files on your computer and upload your work by Git.  
For complex modifications, you need to refer to the [How to Get Started](#how-to-get-started) section in this tutorial to build the environment. Or contact the maintainer/developer to make changes.

For screenshots, please capture key parts as much as possible, and omit useless backgrounds. The main purpose of this is to make the text in the screenshots as large as possible. To improve recognition, such as the location of buttons on complex pages, you can take a larger screenshot so that the image conveys enough information for readers to easily find the location.

## For Maintainers / Developers

The technology stack you need to be familiar with:

* HTML, JS, CSS (**Basic knowledge is everything**)
  * [SASS & SCSS](https://sass-lang.com/)
* [Jekyll](https://jekyllrb.com/)
  * [Liquid templating language for Jekyll](https://jekyllrb.com/docs/liquid/)
  * [Just the Docs](https://github.com/pmarsceill/just-the-docs)
* [Markdown](https://www.markdownguide.org/)
  * (Optional) [kramdown](https://kramdown.gettalong.org/index.html)
* (Optional) [Ruby](https://www.ruby-lang.org/en/)
* (Optional) [Docker](https://www.docker.com/)
  * (Optional) [Docker Compose](https://docs.docker.com/compose/)

For development environment builds, read the [How to Get Started](#how-to-get-started) section in this tutorial.

For writing Markdown files, be sure to read the [Markdown Style Guide](#markdown-style-guide) section of this tutorial.

For writing comments, follow the same style as editors, i.e., respect and tolerance for non-native English speakers.

**This project focuses on the display content first, followed by the user experience.** So please pay attention to priorities and ensure compatibility between different browsers when developing.

## How to Get Started

You must install [Docker](https://www.docker.com/) first.

```bash
$ git clone git@github.com:cityuseattle/cityuseattle.github.io.git
$ docker-compose up
```

Open the <http://localhost:4000> in your browser.

## Markdown Style Guide

If you are using VS Code, please install the [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) extension. This extension can detect whether your writing conforms to this style guide based on pre-configured Markdown Linter rules **to a certain extent**.

At the same time, it is recommended to install the [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension for enhancing the writing experience, and the [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) extension for enhancing the preview experience.

Before reading this section, make sure you are familiar with the [basic syntax of Markdown](https://www.markdownguide.org/basic-syntax/).

Try to avoid meaningless line breaks. Do not use more than two consecutive line breaks. Extra line breaks do not improve code readability.

For better compatibility, leave a blank line at the end of the file.

### Headings

Start with a number sign (#), and don't add an extra number sign after the title. For compatibility, always put a space between the number sign and the title name. You should also put blank lines before and after a heading for compatibility unless required by kramdown syntax. Except for the question mark `?`, don't include other trailing punctuation in the headings.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|<pre># Heading level 1<br/><br/>## Heading level 1</pre>|<pre>Heading level 1<br/>===============<br/><br/>Heading level 2<br/>---------------</pre>|
|`## Heading level 2`|`## Heading level 2 ##`|
|`# Heading level 1`|`#Heading level 1`|
|<pre>Try to put a blank line before...<br/><br/># Heading<br/><br/>...and after a heading.</pre>|<pre>Without blank lines, this might not look right.<br/># Heading<br/>Don't do this!</pre>|
|<pre>Try to put a blank line before...<br/><br/># Heading<br/>{: .kramdown-syntax }<br/><br/>...and after a heading.</pre>|<pre>Without blank lines, this might not look right.<br/># Heading<br/>{: .kramdown-syntax }<br/>Don't do this!</pre>|
<!-- markdownlint-enable MD033 -->

kramdown allows custom IDs for headings, and custom IDs can be used for anchor elements. GitHub doesn't allow it, but you can do the same thing with an empty anchor element with a `name` attribute.  
Rules for auto-generated ids: all letters in the title become lowercase, the dashes `-` with spaces before or after are retained, the spaces are replaced by dashes `-` and other characters are removed.

```markdown
[link to Heading 1 by custom id](#custom-id)  
[link to Heading 2 by auto-generated id](#heading-2---some-special-character-test)  
[link to Heading 3 by anchor element](#custom-id2)

# Heading 1     {#custom-id}

# Heading 2 - Some (special)., character-test?

<a name="custom-id2"></a>

# Heading 3
```

### Paragraphs

Create paragraphs by separating one or more lines of text with blank lines. Tabs and spaces have special meanings in Markdown. So don't indent paragraphs with spaces or tabs unless the paragraph is in a list.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|<pre>Don't put tabs or spaces in front of your paragraphs.<br/><br/>Keep lines left-aligned like this.</pre>|<pre>    This can result in unexpected formatting problems.<br/><br/>  Don't add tabs or spaces in front of paragraphs.</pre>|
<!-- markdownlint-enable MD033 -->

### Line Breaks

Create a line break or newline (`<br>`) within the same paragraph by ending a line with **two** spaces. Avoid using HTML's `<br>` for line breaks.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|<pre>First line with two spaces after.  <br/>And the next line.</pre>|<pre>First line with the HTML tag after.\<br><br/>And the next line.</pre>|
<!-- markdownlint-enable MD033 -->

Line breaks are used to wrap lines within a paragraph, and are different from two paragraphs.
Visually, newlines will have less spacing.
Line breaks are just for a better reading experience, while paragraphs are semantically separated.

<!-- markdownlint-disable MD033 -->
| Rendered Output|Markdown| HTML|
|---|---|---|
|Wrap the line by a line break.<br/>And the next line.|<pre>Wrap the line by a line break.  <br/>And the next line.</pre>|<pre>\<p>Wrap the line by a line break.\<br><br/>And the next line.\</p></pre>|
|<p>Two paragraphs separated.</p><p>And the next line.</p>|<pre>Two paragraphs separated.<br/><br/>And the next line.</pre>|<pre>\<p>Two paragraphs separated.\</p><br/>\<p>And the next line.\</p></pre>|
|<ul><li><p>Use line breaks in lists to cut long paragraphs.<br/>Some other sentences are in the same paragraph.</p></li></ul>|<pre>* Use line breaks in lists to cut long paragraphs.  <br/>  Some other sentences are in the same paragraph.</pre>|<pre>\<ul><br/>  \<li><br/>    \<p>Use line breaks in lists to cut long paragraphs.\<br><br/>Some other sentences are in the same paragraph.\</p><br/>  \</li><br/>\</ul></pre>|
|<ul><li><p>Two paragraphs in the list.</p><p>Other paragraphs.</p></li></ul>|<pre>* Two paragraphs in the list.<br/><br/>  Other paragraphs.</pre>|<pre>\<ul><br/>  \<li><br/>    \<p>Two paragraphs in the list.\</p><br/>    \<p>Other paragraphs.\</p><br/>  \</li><br/>\</ul></pre>|
<!-- markdownlint-enable MD033 -->

### Emphasis (Bold / Italic)

For compatibility, try to use `*` for emphasis. Do not include spaces around letters you want to emphasize, these spaces will cause incorrect rendering.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|`text ***bold & italic*** text`| `text ___bold & italic___ text` or<br/>`text **_bold & italic_** text` or<br/>`text __*bold & italic*__ text`|
|`text **bold** text`| `text **bold **text` or<br/>`text ** bold** text` or<br/>`text ** bold ** text`|
<!-- markdownlint-enable MD033 -->

### Blockquotes

Please add `>` and **a space** before the paragraph to create a block quote.
For the same blockquote, be sure to include the same number of `>` symbols in front.
Although indentation can also indicate whether it is the same blockquote, avoid it as it is not semantically clear.

For compatibility, wrap lines around each blockquote, including nested blockquotes.

> Whether or not blockquote is used to quote someone else's words, please indicate the author or source (copyright issues).

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|<pre>> Blockquotes</pre>|<pre>>Blockquotes</pre>|
|<pre>> Blockquotes<br/>><br/>> > Nested Blockquotes</pre>|<pre>> Blockquotes<br/>><br/>>> Nested Blockquotes</pre>|
|<pre>> Blockquotes<br/>><br/>> Multiple pargraphs</pre>|<pre>> Blockquotes<br/><br/>  Multiple pargraphs</pre>|
|<pre>Try to put a blank line before...<br/><br/>> Blockquotes<br/>><br/>> > Nested Blockquotes<br/><br/>...and after a blockquote.</pre>|<pre>Without blank lines, this might not look right.<br/>> Blockquotes<br/>> > Nested Blockquotes without newline<br/>Don't do this!</pre>|
<!-- markdownlint-enable MD033 -->

### Lists

Please wrap lines before and after the list.

For multi-line or nested lists, the list symbol begins with the first letter of the paragraph.

Line breaks are not used between items of a list with only one paragraph. But if the list has pictures or contains multiple paragraphs, wrap lines between each item. This is done to visually observe whether there is a problem with indentation.


```markdown
 1. @ Line break example of an ordered list,  
    the sentence after the line break should be aligned with the @ sign.

 2. @ Multi-paragraph example of an ordered list.

    The subsequent paragraphs should be aligned with the @ sign.

* @ Line break example of an ordered list,  
  the sentence after the line break should be aligned with the @ sign.

* @ Multi-paragraph example of an unordered list.

  The subsequent paragraphs should be aligned with the @ sign.
```

#### Ordered Lists

Add line items with numbers followed by a period (`.`) and **a space** to create an ordered list.
Please start with the number 1 and arrange in increasing numbers for readability.
Append a leading space to the number to allow 4 spaces when indented and maintain a uniform format when the number of list items is greater than 9.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|<pre> 1. list item 1<br/> 2. list item 2<br/> 3. list item 3  <br/>    Multi-line. 4 spaces indent.<br/> 4. list item 4<br/> 5. list item 5<br/> 6. list item 6<br/> 7. list item 7<br/> 8. list item 8<br/> 9. Sequence numbers can also be aligned<br/>10. when there are more than 9 items.</pre>|<pre> 1. list item 1<br/> 1. All serial numbers are 1<br/>1. list item 3  <br/>   No leading spaces. 3 spaces indent.<br/> 1. list item 4<br/> 5. Numbers are non-incrementing.<br/> 7. list item 6<br/> 6. list item 7<br/> 8. list item 8<br/> 1. list item 9<br/> 1. list item 10</pre>|
|<pre>Try to put a blank line before...<br/><br/> 1. list item 1<br/><br/>...and after a list.</pre>|<pre>Without blank lines, this might not look right.<br/> 1. list item 1<br/>Don't do this!</pre>|
|<pre> 1. list item 1<br/><br/>    !\[picture]\(url) or mult-paragraph<br/><br/> 2. list item 2<br/><br/> 3. list item 3</pre>|<pre> 1. list item 1<br/><br/>    !\[picture]\(url) or mult-paragraph<br/> 2. list item 2<br/> 3. list item 3</pre>|
<!-- markdownlint-enable MD033 -->

#### Unordered Lists

Use an asterisk (`*`) followed by **a space** to create an unordered list.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|`* Unordered Lists Item 1`|`*Unordered Lists Item 1` or<br/>`- Unordered Lists Item 1` or<br/>`+ Unordered Lists Item 1`|
|<pre>Try to put a blank line before...<br/><br/>\* list item 1<br/><br/>...and after a list.</pre>|<pre>Without blank lines, this might not look right.<br/>\* list item 1<br/>Don't do this!</pre>|
|<pre>\* list item 1<br/><br/>  !\[picture]\(url) or mult-paragraph<br/><br/>\* list item 2<br/><br/>\* list item 3</pre>|<pre>\* list item 1<br/><br/>  !\[picture]\(url) or mult-paragraph<br/>\* list item 2<br/>\* list item 3</pre>|
<!-- markdownlint-enable MD033 -->

If you need to start an unordered list item with a number followed by a period, you can use a backslash (`\`) to escape the period.

<!-- markdownlint-disable MD033 -->
| Rendered Output|Markdown| HTML|
|---|---|---|
|<ul><li><p>1949. A great year!</p></li></ul>|`* 1949\. A great year!`|<pre>\<ul><br/>  \<li>\<p>1949. A great year!\</p>\</li><br/>\</ul></pre>|
<!-- markdownlint-enable MD033 -->

### Inline Code & Code Blocks

Please only use backticks (`` ` ``) for inline code or code blocks. Do not use indentation to represent code blocks. Please wrap lines before and after the code block.
Inline codes or code blocks will have a special monospaced font with high recognition, high recognition means that some letters and numbers are easy to distinguish, such as Il1!| (`Il1!|`), oO08(`oO08`).

Make good use of inline code to express information that needs to be conveyed clearly, such as:

* executables - `gcc`, `npm`, `py`, `go`
* paths - `/etc/hosts`, `docs/git/install.md`
* version numbers - `0.2.0`, `1.8.6-frost.2`
* code e.g. reserved keywords, builtins and operators - `this`, `true`/`false`, `String`, `=>`

Do not use inline code for:

* project or proper names - e.g [React](https://reactjs.org/), [GCC](https://gcc.gnu.org/), [Node.js](https://nodejs.org/), [Golang](https://golang.org/) or [Rust](https://www.rust-lang.org/)
* libraries - e.g. [libgit2](https://libgit2.github.com/), [libc](https://crates.io/crates/libc) (Rust Bindings), [glibc](https://www.gnu.org/software/libc), [glib2](https://wiki.gnome.org/Projects/GLib) or [jackson-databind](https://bintray.com/bintray/jcenter/com.fasterxml.jackson.core%3Ajackson-databind) (Java)
* packages and modules - e.g. [react-dom](https://www.npmjs.com/package/react-dom), [snowsaw](https://pypi.python.org/pypi/snowsaw) or [archlinux-keyring](https://www.archlinux.org/packages/core/any/archlinux-keyring)

For inline code, do not use more than one backticks unless the code contains backticks.

For code blocks, the language must be specified. For example `text` for plain text, `console`/`shell` for terminal commands, `sh`/`zsh`/`bash` for bash, `powershell`/`ps` for PowerShell , `dos`/`bat`/`cmd` for DOS, `js`/`javascript` for JavaScript.

When a code block is inside a list, make sure to use the correct indentation to avoid breaking the list.

For a better reading experience, please use line breaks for commands that are too long in code blocks.

In code blocks on the command line, precede each command with dollar sign \(`$`) to indicate that this is a command and not the output of a command.

<!-- markdownlint-disable MD033 MD044 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|`` `inline code` `` or<br/>``` ``text with backticks (`)`` ```|``` ``inline code without backticks`` ``` or<br/>```` ```inline code without backticks``` ````|
|<pre>\`\`\`js<br/>const varName = 10;<br/>\`\`\`</pre>|<pre>\`\`\`<br/>const varName = 10;<br/>\`\`\`</pre>or<br/><pre>\~\~\~js<br/>const varName = 10;<br/>\~\~\~</pre>or<br/><pre>    const varName = 10;</pre>|
|<pre>\`\`\`\`markdown<br/>\`\`\`js<br/>const varName = 10;<br/>\`\`\`<br/>\`\`\`\`</pre>|<pre>\~\~\~markdown<br/>\`\`\`js<br/>const varName = 10;<br/>\`\`\`<br/>\~\~\~</pre>|
|<pre>Try to put a blank line before...<br/><br/>\`\`\`js<br/>const varName = 10;<br/>\`\`\`<br/><br/>...and after a list.</pre>|<pre>Without blank lines, this might not look right.<br/>\`\`\`js<br/>const varName = 10;<br/>\`\`\`<br/>Don't do this!</pre>|
|<pre> 1. within lists<br/><br/>    \`\`\`js<br/>    const varName = 10;<br/>    \`\`\`<br/><br/> 2. make sure to use the correct indention</pre>|<pre> 1. within lists<br/><br/>\`\`\`js<br/>const varName = 10;<br/>\`\`\`<br/><br/> 2. This is the interrupted list</pre>|
|<pre>\`\`\`console<br/>$ npx run docs:generate -- --template=winter \\<br/>--description="Sparkling and frozen" \\<br/>--elements="snow,frost,ice" --snowflakes=20<br/>\`\`\`</pre>|<pre>\`\`\`console<br/>$ npx run docs:generate -- --template=winter --description="Sparkling and frozen" --elements="snow,frost,ice" --snowflakes=20<br/>\`\`\`</pre>|
|<pre>\`\`\`console<br/>$ git --version<br/>\`\`\`</pre>|<pre>\`\`\`console<br/>git --version<br/>\`\`\`</pre>|
<!-- markdownlint-enable MD033 MD044 -->

### Horizontal Rules

Use only three dashes (`---`) symbols for horizontal lines. Please wrap lines before and after each horizontal line.

<!-- markdownlint-disable MD033 -->
|✅ Do this| ❌ Don't do this|
|---|---|
|`---`|`***` or<br/>`___` or<br/>`----------------`|
|<pre>Try to put a blank line before...<br/><br/>---<br/><br/>...and after a horizontal rule.</pre>|<pre>Without blank lines, this would be a heading.<br/>---<br/>Don't do this!</pre>|
<!-- markdownlint-enable MD033 -->

### Links

To create a link, enclose the link text in square brackets and put the URL of the link and an optional informative title in arc brackets immediately following the square brackets. For example `[link text](https://google.com "title, will appear as a tooltip when the user hovers over the link")`, the rendering result of this example: [link text](https://google.com "title, will appear as a tooltip when the user hovers over the link")。

Inline link URLs are not allowed to contain spaces, solution:

* Replace all spaces with escape character `%20`
* Use the `a` tag in HTML to represent inline links
* Use [reference-style links](#reference-style-links)

For external links other than this site, please start with `http://` or `https://` or `mailto:`. Do not use links or reference-style links with empty URLs.

Avoid naked URLs and naked emails, enclose them in angle brackets:

```markdown
<https://google.com>  
<fake@example.com>
```

Rendered Output:

<https://google.com>  
<fake@example.com>

To emphasize links, add asterisks before and after the brackets and parentheses. To denote links as code, add backticks in the brackets. For links in the form of images, please include the image in square brackets. For image links and code links, be sure to bring a title to provide a visual effect.

```markdown
**[bold](https://google.com)**  
*[italic](https://google.com)*  
[`code`](https://google.com "https://google.com")  
[![alt text for image](assets/images/git/git_logo.png)](https://git-scm.com/ "https://git-scm.com/")
```

Rendered Output:

**[bold](https://google.com)**  
*[italic](https://google.com)*  
[`code`](https://google.com)  
[![alt text for image](assets/images/git/git_logo.png)](https://git-scm.com/ "https://git-scm.com/")

#### Reference-style Links

Reference-style links allow to separate the link's URL and title from the link's text, keeping the reader's attention on the content and increasing maintainability. A reference-style link consists of two parts.

For a link to the reference style, the first part is available in three forms:

* [full](https://github.github.com/gfm/#full-reference-link) - `[link text][reference-link-label]`
* [collapsed](https://github.github.com/gfm/#collapsed-reference-link) - `[reference-link-label][]`
* [short](https://github.github.com/gfm/#shortcut-reference-link) - `[reference-link-label]`

Do not include any characters between the first and second set of square brackets. The labels in the second set of brackets are not case sensitive, please use **only** lowercase letters, numbers, and dashes. Do not include extra spaces within square brackets.

For a link to the reference-style, the second part consists of label, URL, and optional title:

* Labels: Labels are not case sensitive, please use **only** lowercase letters, numbers, and dashes. Use square brackets to wrap tags followed by a colon and space. Do not include extra spaces within square brackets and after colons.
* URL: Please wrap the URL in angle brackets, as this can contain spaces.
* \[Optional] title: Please use double-quotes. For double quotes inside the title, escape them with a backslash \(\\).

```markdown
[reference-link-label]: <https://google.com> "google"
```

For the second part of the reference-style link, put it at the end of the article and sort it in ascending lexicographical order (a to z, and numbers are before letters). Always add a blank line between the first reference link and the article or footnote. Blank lines are not required between reference links. Please ensure that each first section label is referenced by the corresponding, and remove redundant unused reference links.

#### Footnotes

Both GitHub and kramdown support footnotes.

Footnotes allow you to add notes and references without cluttering up the body of the document. When you create a footnote, a linked superscript number appears where you added the footnote reference. Readers can click on the link to jump to the content of the footnotes at the bottom of the page. Footnotes are also divided into two parts.

The first part of the footnote is the identifier. Identifiers are enclosed in square brackets and the first character is the caret (`^`): `[^footnote-identifier]`. Identifiers in parentheses are not case sensitive, please use **only** lowercase letters, numbers, and dashes. Do not include extra spaces within square brackets. Identifiers only correlate the footnote reference with the footnote itself - in the output, footnotes are numbered sequentially.

The second part of the footnote consists of the identifier, and the Markdown code:

* Identifier: Be exactly the same as the first part of the footnote, followed by a colon and space.
* Markdown code: For multi-line text, use an indent of 4 spaces.

Please place the second part of footnotes at the end of the article, before the second part of the reference-style link (if any).

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

...end of article

<!-- markdownlint-disable MD046 -->
[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
<!-- markdownlint-enable MD046 -->

second part of the reference-style links...
```

The rendered output looks like this:

---

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

<!-- markdownlint-disable MD046 -->
[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
<!-- markdownlint-enable MD046 -->

---

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

Please try to use `png` or `svg` as the image format.

The name of the image file must be meaningful. Images must have descriptions in Markdown. If you really don't know how to describe it, you can use the filename of the image. Doing so improves accessibility and makes it easier to locate errors if they occur.

### Tables

Both Markdown and kramdown support displaying tables, but there are differences in syntax. The table syntax of kramdown is a superset of Markdown and more powerful, especially for tables that need to display multiple lines of text in the table, please read the detailed kramdown table syntax [here](https://kramdown.gettalong.org/syntax.html#tables). This section will describe some rules that can be used with both.

For small, non-complex, and single-line content, tables are a good way to convey information; but for large, complex tables, consider using lists.

In order to render the table normally, keep a blank line before and after the table. When the table is inside a list, make sure to have the correct indentation so as not to interrupt the list.

Because all tables will eventually render into easy-to-read HTML, don't align tables by adding extra spaces between the content and the pipe and between the pipe and the hyphen. This avoids maintenance difficulties. For the same reason, be sure to only use up to three hyphens for hyphenated lines after the header.
