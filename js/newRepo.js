export const newItem = ({ id, name, visibility, html_url, author, data }) => {
  return `
  <li class="repositories-item" data-name="${name}">
                <p class="repositories-item--title">
                  ID:<spam class="repositories-item--text">${id}</spam>
                </p>
                <p class="repositories-item--title">
                  URL:<spam class="repositories-item--text">
                    <a
                      href="${html_url}"
                      >${html_url}</a
                    >
                  </spam>
                </p>
                <p class="repositories-item--title">
                  Name:<spam class="repositories-item--text">
                   ${name}
                  </spam>
                </p>
                <p class="repositories-item--title">
                  Visibility:<spam class="repositories-item--text">${visibility}</spam>
                </p>
                <p class="repositories-item--title">
                  Last commit:<spam class="repositories-item--text">
                    <button type="button" class="detail-repositories ${
                      author || data ? `visually-hidden` : ""
                    }">details</button>
                    
                  </spam>
                </p>

                ${
                  author
                    ? `<p class="repositories-item--title detail-info">
                  Author:<spam class="repositories-item--text">${author}</spam>
                </p>`
                    : ""
                }
                 
                ${
                  data
                    ? `<p class="repositories-item--title detail-info">
                  Last update date:<spam class="repositories-item--text">${data.slice(
                    0,
                    10
                  )}, ${data.slice(11, 19)}</spam>
                </p>`
                    : ""
                }
                
                 
              </li>
  `;
};
