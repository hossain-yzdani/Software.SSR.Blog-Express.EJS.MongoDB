const response = async (res, data, message, code, success) => {
  await res.status(code).json({data: data, message: message, success: success})
}

export default response;
