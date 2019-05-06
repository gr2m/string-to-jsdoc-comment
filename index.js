function stringToJsdocComment (description) {
  return description && '/**\n' + description.trim().split('\n').map(str => ' * ' + str).join('\n') + '\n */'
}

module.exports = {
  stringToJsdocComment
}
